// Type of place response from goong map
export type IPlace = {
  id: string;
  metadata: {
    url: string;
    name: string;
    types: Array<string>;
    geometry: {
      location: {
        lat: number;
        lng: number;
      }
    }
  }
}
