import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CouponWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  percentage?: FloatNullableFilter;
};
