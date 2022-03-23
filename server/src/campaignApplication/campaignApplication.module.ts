import { Module } from "@nestjs/common";
import { CampaignApplicationModuleBase } from "./base/campaignApplication.module.base";
import { CampaignApplicationService } from "./campaignApplication.service";
import { CampaignApplicationController } from "./campaignApplication.controller";
import { CampaignApplicationResolver } from "./campaignApplication.resolver";

@Module({
  imports: [CampaignApplicationModuleBase],
  controllers: [CampaignApplicationController],
  providers: [CampaignApplicationService, CampaignApplicationResolver],
  exports: [CampaignApplicationService],
})
export class CampaignApplicationModule {}
