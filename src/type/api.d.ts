export type TQuery = {
  limit: string;
  offset: string;
  keyword: string;
  order: string;
  direction: string;
};

export enum FetchStatus {
  NoAction,
  Loading,
  Success,
  Failed,
  PermissionDenied,
}
