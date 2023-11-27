import { IPermission } from "./permission";

export type IPlugin = {
  id: number | string;
  name: string;
  description: string;
  enable: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  config: any;
  image: string;
  permissions: Array<IPermission>
}