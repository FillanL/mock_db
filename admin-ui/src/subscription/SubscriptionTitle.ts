import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "tier";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.tier || record.id;
};
