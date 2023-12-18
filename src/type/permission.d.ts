export type PermissionMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type IPermission = {
  id?: string;
  name: string;
  description: string;
  policy: string;
  resource: string;
  method: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  method: PermissionMethod;
};
