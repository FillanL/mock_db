import { CampaignApplicationWhereUniqueInput } from "../campaignApplication/CampaignApplicationWhereUniqueInput";
import { CampaignUpdateManyWithoutUsersInput } from "./CampaignUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  campaignApplication?: CampaignApplicationWhereUniqueInput | null;
  campaigns?: CampaignUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
