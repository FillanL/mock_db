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
import { CampaignApplicationWhereUniqueInput } from "../../campaignApplication/base/CampaignApplicationWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CampaignUpdateManyWithoutUsersInput } from "./CampaignUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CampaignApplicationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CampaignApplicationWhereUniqueInput)
  @IsOptional()
  @Field(() => CampaignApplicationWhereUniqueInput, {
    nullable: true,
  })
  campaignApplication?: CampaignApplicationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CampaignUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CampaignUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CampaignUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  campaigns?: CampaignUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
