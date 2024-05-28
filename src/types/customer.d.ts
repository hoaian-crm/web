import { IAddress } from "./address";
import { ResourceTag } from "./tag";

export type ICustomer = {
  id: number | string;
  name?: string;
  email?: string;
  gender?: string;
  avatar?: string;
  extension?: string;
  phone?: string;
  dob?: string;
  identify?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  address?: IAddress;
  placeId?: string;
  tag?: Array<ResourceTag>;
  note?: string;
  avatar?: string;
}
