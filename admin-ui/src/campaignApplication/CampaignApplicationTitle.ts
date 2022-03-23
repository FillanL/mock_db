import { CampaignApplication as TCampaignApplication } from "../api/campaignApplication/CampaignApplication";

export const CAMPAIGNAPPLICATION_TITLE_FIELD = "id";

export const CampaignApplicationTitle = (
  record: TCampaignApplication
): string => {
  return record.id || record.id;
};
