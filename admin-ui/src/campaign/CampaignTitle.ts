import { Campaign as TCampaign } from "../api/campaign/Campaign";

export const CAMPAIGN_TITLE_FIELD = "title";

export const CampaignTitle = (record: TCampaign): string => {
  return record.title || record.id;
};
