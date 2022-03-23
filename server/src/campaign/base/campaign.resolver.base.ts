/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateCampaignArgs } from "./CreateCampaignArgs";
import { UpdateCampaignArgs } from "./UpdateCampaignArgs";
import { DeleteCampaignArgs } from "./DeleteCampaignArgs";
import { CampaignFindManyArgs } from "./CampaignFindManyArgs";
import { CampaignFindUniqueArgs } from "./CampaignFindUniqueArgs";
import { Campaign } from "./Campaign";
import { CampaignApplicationFindManyArgs } from "../../campaignApplication/base/CampaignApplicationFindManyArgs";
import { CampaignApplication } from "../../campaignApplication/base/CampaignApplication";
import { User } from "../../user/base/User";
import { CampaignService } from "../campaign.service";

@graphql.Resolver(() => Campaign)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CampaignResolverBase {
  constructor(
    protected readonly service: CampaignService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  async _campaignsMeta(
    @graphql.Args() args: CampaignFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Campaign])
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  async campaigns(
    @graphql.Args() args: CampaignFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Campaign[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Campaign",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Campaign, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "own",
  })
  async campaign(
    @graphql.Args() args: CampaignFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Campaign | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Campaign",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Campaign)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "create",
    possession: "any",
  })
  async createCampaign(
    @graphql.Args() args: CreateCampaignArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Campaign> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Campaign",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Campaign"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Campaign)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "update",
    possession: "any",
  })
  async updateCampaign(
    @graphql.Args() args: UpdateCampaignArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Campaign | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Campaign",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Campaign"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Campaign)
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "delete",
    possession: "any",
  })
  async deleteCampaign(
    @graphql.Args() args: DeleteCampaignArgs
  ): Promise<Campaign | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CampaignApplication])
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  async campaignApplications(
    @graphql.Parent() parent: Campaign,
    @graphql.Args() args: CampaignApplicationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CampaignApplication[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CampaignApplication",
    });
    const results = await this.service.findCampaignApplications(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Campaign",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Campaign,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}