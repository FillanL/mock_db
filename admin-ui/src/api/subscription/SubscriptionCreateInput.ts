import { OrderCreateNestedManyWithoutSubscriptionsInput } from "./OrderCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  orders?: OrderCreateNestedManyWithoutSubscriptionsInput;
  price?: number | null;
  tier?: string | null;
};
