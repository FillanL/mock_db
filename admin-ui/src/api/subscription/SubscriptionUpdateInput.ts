import { OrderUpdateManyWithoutSubscriptionsInput } from "./OrderUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  orders?: OrderUpdateManyWithoutSubscriptionsInput;
  price?: number | null;
  tier?: string | null;
};
