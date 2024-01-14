import { ITag } from "./tag";

export type IProduct = {
  id: string;
  name: string;
  alias: string;
  price: number;
  image: string;
  stock: number;
  inStock: boolean;
  description: string;
  discount: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  tags: Array<ITag>;
}
