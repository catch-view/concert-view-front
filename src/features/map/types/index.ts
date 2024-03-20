export type Position = {
  lat: number | null;
  lng: number | null;
  addressName?: string;
  placeName?: string;
};

export type Place = {
  addressName: string;
  categoryGroupCode: string;
  categoryGroupName: string;
  distance: string;
  id: string;
  phone: string;
  placeName: string;
  placeUrl: string;
  roadAddressName: string;
  lat: number | null;
  lng: number | null;
};

export type MapSliceState = {
  userPosition: Position;
  focusingPlace: Place;
  drawerSearchQuery: string;
  drawerPlaces: IKakaoPlace[];
};

export type IKakaoPlace = {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}
