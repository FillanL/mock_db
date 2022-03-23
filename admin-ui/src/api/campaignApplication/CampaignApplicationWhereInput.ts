import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CampaignApplicationWhereInput = {
  campaign?: CampaignWhereUniqueInput;
  id?: StringFilter;
  users?: UserListRelationFilter;
};
