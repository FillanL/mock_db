import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  percentage?: SortOrder;
  updatedAt?: SortOrder;
};
