export type IMail = {
  id?: string;
  to: string;
  subject: string;
  html?: string;
  template?: string;
  createdAt?: Date;
  updatedAt?: Date;
  context?: object;
}