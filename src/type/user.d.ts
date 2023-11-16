import { IRole } from "./role";

export interface IUser {
  id: string;
  email: string;
  displayName: string;
  avatar: string;
  referralCode: string;
  active: boolean;
  role: IRole;
  createdAt: Date;
  updatedAt: Date;
}
