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
  drawerPlaces: Place[];
};
