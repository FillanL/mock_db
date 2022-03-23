import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CampaignApplicationService } from "./campaignApplication.service";
import { CampaignApplicationControllerBase } from "./base/campaignApplication.controller.base";

@swagger.ApiTags("campaignApplications")
@common.Controller("campaignApplications")
export class CampaignApplicationController extends CampaignApplicationControllerBase {
  constructor(
    protected readonly service: CampaignApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
