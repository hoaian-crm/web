export type IPermission = {
  id: string;
  name: string;
  description: string;
  policy: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};
