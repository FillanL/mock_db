/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { CampaignApplicationWhereUniqueInput } from "./CampaignApplicationWhereUniqueInput";
import { CampaignApplicationUpdateInput } from "./CampaignApplicationUpdateInput";

@ArgsType()
class UpdateCampaignApplicationArgs {
  @Field(() => CampaignApplicationWhereUniqueInput, { nullable: false })
  where!: CampaignApplicationWhereUniqueInput;
  @Field(() => CampaignApplicationUpdateInput, { nullable: false })
  data!: CampaignApplicationUpdateInput;
}

export { UpdateCampaignApplicationArgs };
