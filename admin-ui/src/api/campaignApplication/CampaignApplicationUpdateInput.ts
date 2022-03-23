import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { UserUpdateManyWithoutCampaignApplicationsInput } from "./UserUpdateManyWithoutCampaignApplicationsInput";

export type CampaignApplicationUpdateInput = {
  campaign?: CampaignWhereUniqueInput | null;
  users?: UserUpdateManyWithoutCampaignApplicationsInput;
};
