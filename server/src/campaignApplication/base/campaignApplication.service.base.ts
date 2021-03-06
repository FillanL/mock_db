/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, CampaignApplication, User, Campaign } from "@prisma/client";

export class CampaignApplicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CampaignApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignApplicationFindManyArgs>
  ): Promise<number> {
    return this.prisma.campaignApplication.count(args);
  }

  async findMany<T extends Prisma.CampaignApplicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignApplicationFindManyArgs>
  ): Promise<CampaignApplication[]> {
    return this.prisma.campaignApplication.findMany(args);
  }
  async findOne<T extends Prisma.CampaignApplicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignApplicationFindUniqueArgs>
  ): Promise<CampaignApplication | null> {
    return this.prisma.campaignApplication.findUnique(args);
  }
  async create<T extends Prisma.CampaignApplicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignApplicationCreateArgs>
  ): Promise<CampaignApplication> {
    return this.prisma.campaignApplication.create<T>(args);
  }
  async update<T extends Prisma.CampaignApplicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignApplicationUpdateArgs>
  ): Promise<CampaignApplication> {
    return this.prisma.campaignApplication.update<T>(args);
  }
  async delete<T extends Prisma.CampaignApplicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CampaignApplicationDeleteArgs>
  ): Promise<CampaignApplication> {
    return this.prisma.campaignApplication.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.campaignApplication
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }

  async getCampaign(parentId: string): Promise<Campaign | null> {
    return this.prisma.campaignApplication
      .findUnique({
        where: { id: parentId },
      })
      .campaign();
  }
}
