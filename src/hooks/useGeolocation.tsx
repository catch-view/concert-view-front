import { useState, useEffect } from 'react';

interface ILocationType {
  loaded: boolean;
  coordinates?: { lat: number | null; lng: number | null };
  address: string;
  error?: { code: number; message: string };
}

const useGeolocation = () => {
  const [location, setLocation] = useState<ILocationType>({
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
