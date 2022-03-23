import { CampaignApplicationWhereInput } from "./CampaignApplicationWhereInput";
import { CampaignApplicationOrderByInput } from "./CampaignApplicationOrderByInput";

export type CampaignApplicationFindManyArgs = {
  where?: CampaignApplicationWhereInput;
  orderBy?: Array<CampaignApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
