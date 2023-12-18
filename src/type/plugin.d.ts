import { IPermission } from "./permission";

export type IPlugin = {
  id?: number | string;
  name: string;
  description: string;
  enable: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  image: string;
  permissions: Array<IPermission>
  config: any;
}