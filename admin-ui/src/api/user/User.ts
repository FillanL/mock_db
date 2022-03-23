import { CampaignApplication } from "../campaignApplication/CampaignApplication";
import { Campaign } from "../campaign/Campaign";
import { Order } from "../order/Order";

export type User = {
  campaignApplication?: CampaignApplication | null;
  campaigns?: Array<Campaign>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
