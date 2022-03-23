import { Order } from "../order/Order";

export type Subscription = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  price: number | null;
  tier: string | null;
  updatedAt: Date;
};
