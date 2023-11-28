export type IMail = {
  id?: string;
  to: string;
  subject: string;
  html: string;
  createdAt?: Date;
  updatedAt?: Date;
}