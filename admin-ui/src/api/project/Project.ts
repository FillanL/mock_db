import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  imgUrl: string;
  title: string;
  updatedAt: Date;
  url: string;
  user?: User;
};
