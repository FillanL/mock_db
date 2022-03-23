/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CampaignApplicationUpdateManyWithoutCampaignsInput } from "./CampaignApplicationUpdateManyWithoutCampaignsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class CampaignUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CampaignApplicationUpdateManyWithoutCampaignsInput,
  })
  @ValidateNested()
  @Type(() => CampaignApplicationUpdateManyWithoutCampaignsInput)
  @IsOptional()
  @Field(() => CampaignApplicationUpdateManyWithoutCampaignsInput, {
    nullable: true,
  })
  campaignApplications?: CampaignApplicationUpdateManyWithoutCampaignsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}
export { CampaignUpdateInput };
