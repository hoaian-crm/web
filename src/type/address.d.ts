export type IAddress = {
  id: string
  url: string
  name: string
  description: string
  types: Array<string>
  compound: {
    commune: any
    district: any
    province: any
  }
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
  place_id: string
  plus_code: {
    global_code: string
    compound_code: string
  }
  formatted_address: string
  metadata: {
    url: string
    name: string
    types: Array<string>
    compound: {
      commune: any
      district: any
      province: any
    }
    geometry: {
      location: {
        lat: number
        lng: number
      }
    }
    place_id: string
    plus_code: {
      global_code: string
      compound_code: string
    }
    formatted_address: string
  }
  createdAt: string
  updatedAt: string
}