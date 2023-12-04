export type ITemplate = {
  id?: number | string;
  name: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  context?: object;
  previewImage?: string;
  description?: string;
};
