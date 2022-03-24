import { CampaignApplicationUpdateManyWithoutCampaignsInput } from "./CampaignApplicationUpdateManyWithoutCampaignsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CampaignUpdateInput = {
  campaignApplications?: CampaignApplicationUpdateManyWithoutCampaignsInput;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
