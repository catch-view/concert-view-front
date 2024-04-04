import { useState, useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';

// project imports
import UserMarker from '../Marker/UserMarker';
import PlaceMarker from '../Marker/PlaceMarker';
import { useAppSelector } from 'src/store/hook';

const KakaoMap = () => {
  const { userPosition, focusingPlace } = useAppSelector((state) => state.map);
  const [mapCenter, setMapCenter] = useState({
    lat: 0,
    lng: 0,
  });

  // 최초 접속 시 접속자 위치로 포커싱
  useEffect(() => {
    setMapCenter({
      lat: userPosition.lat ?? 0,
      lng: userPosition.lng ?? 0,
    });
  }, [userPosition]);

  // 포커싱 장소 변경 시 해당 장소로 포커싱
  useEffect(() => {
    setMapCenter({
      lat: focusingPlace.lat ? focusingPlace.lat + 0.003 : 0,
      lng: focusingPlace.lng ?? 0,
    });
  }, [focusingPlace]);

  return (
    <Map
      id='map'
      center={mapCenter}
      isPanto={true}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100vh',
      }}
      level={4}
    >
      {/* 접속자 위치 마커 */}
      <UserMarker
        position={{
          // 마커 좌표
          lat: userPosition?.lat ?? 0,
          lng: userPosition?.lng ?? 0,
        }}
      />

      {/* 포커싱 장소 마커 */}
      {focusingPlace.placeName && (
        <PlaceMarker
          position={{
            lat: focusingPlace?.lat ?? 0,
            lng: focusingPlace?.lng ?? 0,
          }}
        />
      )}
    </Map>
  );
};

export default KakaoMap;
