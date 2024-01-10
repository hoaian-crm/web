import { IAddress } from "./address";

export type ICustomer = {
  id: number | string;
  name?: string;
  email?: string;
  phone?: string;
  extension?: string;
  age?: number;
  address?: IAddress;
  identify?: string;
  createdAt?: Date;
  updatedAt?: Date;
  placeId: string;
  avatar?: string;
};
