import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  subscription?: SubscriptionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
