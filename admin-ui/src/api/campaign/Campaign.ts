import { CampaignApplication } from "../campaignApplication/CampaignApplication";
import { User } from "../user/User";

export type Campaign = {
  campaignApplications?: Array<CampaignApplication>;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
