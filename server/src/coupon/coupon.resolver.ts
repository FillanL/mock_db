import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CouponResolverBase } from "./base/coupon.resolver.base";
import { Coupon } from "./base/Coupon";
import { CouponService } from "./coupon.service";

@graphql.Resolver(() => Coupon)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CouponResolver extends CouponResolverBase {
  constructor(
    protected readonly service: CouponService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
