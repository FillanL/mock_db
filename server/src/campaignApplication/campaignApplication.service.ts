import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CampaignApplicationServiceBase } from "./base/campaignApplication.service.base";

@Injectable()
export class CampaignApplicationService extends CampaignApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
