export interface IPosition {
  lat: number | null;
  lng: number | null;
  addressName: string;
}

export interface IPlace {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}
