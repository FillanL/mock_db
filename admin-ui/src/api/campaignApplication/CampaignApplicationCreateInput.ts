import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { UserCreateNestedManyWithoutCampaignApplicationsInput } from "./UserCreateNestedManyWithoutCampaignApplicationsInput";

export type CampaignApplicationCreateInput = {
  campaign?: CampaignWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutCampaignApplicationsInput;
};
