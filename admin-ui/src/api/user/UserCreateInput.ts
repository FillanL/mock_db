import { CampaignApplicationWhereUniqueInput } from "../campaignApplication/CampaignApplicationWhereUniqueInput";
import { CampaignCreateNestedManyWithoutUsersInput } from "./CampaignCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  campaignApplication?: CampaignApplicationWhereUniqueInput | null;
  campaigns?: CampaignCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
