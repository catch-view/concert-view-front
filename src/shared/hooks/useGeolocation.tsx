import { useState, useEffect } from 'react';

interface LocationType {
  loaded: boolean;
  coordinates?: { lat: number | null; lng: number | null };
  address: string;
  error?: { code: number; message: string };
}

/**
 * geoLocation을 통해 클라이언트 location 정보를 가져오기 위한 hook
 * @returns 클라이언트 위치정보
 */
const useGeolocation = () => {
  const [location, setLocation] = useState<LocationType>({
    loaded: false,
    address: '',
    coordinates: { lat: 0, lng: 0 },
  });

  // 성공에 대한 로직
  const onSuccess = (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(
      location.coords.longitude,
      location.coords.latitude,
      (result, status) => {
        if (status == kakao.maps.services.Status.OK) {
          setLocation({
            loaded: true,
            address: result[0].address_name || '',
            coordinates: {
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            },
          });
        }
      }
    );
  };

  // 에러에 대한 로직
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      ...location,
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    // navigator 객체 안에 geolocation이 없다면
    // 위치 정보가 없는 것.
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
