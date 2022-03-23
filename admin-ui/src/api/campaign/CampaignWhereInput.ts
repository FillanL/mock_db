import { CampaignApplicationListRelationFilter } from "../campaignApplication/CampaignApplicationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignWhereInput = {
  campaignApplications?: CampaignApplicationListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
