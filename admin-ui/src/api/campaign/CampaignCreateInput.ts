import { CampaignApplicationCreateNestedManyWithoutCampaignsInput } from "./CampaignApplicationCreateNestedManyWithoutCampaignsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignCreateInput = {
  campaignApplications?: CampaignApplicationCreateNestedManyWithoutCampaignsInput;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
