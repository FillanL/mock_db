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
import { CampaignWhereUniqueInput } from "../../campaign/base/CampaignWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutCampaignApplicationsInput } from "./UserUpdateManyWithoutCampaignApplicationsInput";
@InputType()
class CampaignApplicationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CampaignWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CampaignWhereUniqueInput)
  @IsOptional()
  @Field(() => CampaignWhereUniqueInput, {
    nullable: true,
  })
  campaign?: CampaignWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutCampaignApplicationsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutCampaignApplicationsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutCampaignApplicationsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutCampaignApplicationsInput;
}
export { CampaignApplicationUpdateInput };