export interface IPosition {
  lat: number | null;
  lng: number | null;
  addressName?: string;
  placeName?: string;
}

export interface IPlace {
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
}
