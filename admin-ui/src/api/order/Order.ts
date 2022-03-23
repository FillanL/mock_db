import { Subscription } from "../subscription/Subscription";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  subscription?: Subscription | null;
  updatedAt: Date;
  user?: User | null;
};
