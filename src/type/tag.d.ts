export type ITag = {
  key: string;
  color: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};
export type IResourceTag = {
  key: string;
  value: string;
  resource: string;
  resource_id: string;
  tag: ITag;
};
