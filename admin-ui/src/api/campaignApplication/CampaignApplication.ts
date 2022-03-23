import { Campaign } from "../campaign/Campaign";
import { User } from "../user/User";

export type CampaignApplication = {
  campaign?: Campaign | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
