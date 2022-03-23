import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  subscription?: SubscriptionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
