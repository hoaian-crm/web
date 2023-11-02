import { IPermission } from "./permission";

export type IRole = {
  id: string | number;
  description: string;
  name: string;
  permissions: Array<IPermission>;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};
