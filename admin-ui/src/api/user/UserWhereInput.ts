import { CampaignApplicationWhereUniqueInput } from "../campaignApplication/CampaignApplicationWhereUniqueInput";
import { CampaignListRelationFilter } from "../campaign/CampaignListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  campaignApplication?: CampaignApplicationWhereUniqueInput;
  campaigns?: CampaignListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  username?: StringFilter;
};
