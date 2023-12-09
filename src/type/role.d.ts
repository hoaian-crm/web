import { IPermission } from "./permission";

export type IRole = {
  id?: string;
  description: string;
  name: string;
  permissions?: Array<IPermission>;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};
