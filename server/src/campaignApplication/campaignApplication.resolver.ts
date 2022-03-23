import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CampaignApplicationResolverBase } from "./base/campaignApplication.resolver.base";
import { CampaignApplication } from "./base/CampaignApplication";
import { CampaignApplicationService } from "./campaignApplication.service";

@graphql.Resolver(() => CampaignApplication)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CampaignApplicationResolver extends CampaignApplicationResolverBase {
  constructor(
    protected readonly service: CampaignApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
