/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Coupon } from "@prisma/client";

export class CouponServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CouponFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponFindManyArgs>
  ): Promise<number> {
    return this.prisma.coupon.count(args);
  }

  async findMany<T extends Prisma.CouponFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponFindManyArgs>
  ): Promise<Coupon[]> {
    return this.prisma.coupon.findMany(args);
  }
  async findOne<T extends Prisma.CouponFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponFindUniqueArgs>
  ): Promise<Coupon | null> {
    return this.prisma.coupon.findUnique(args);
  }
  async create<T extends Prisma.CouponCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponCreateArgs>
  ): Promise<Coupon> {
    return this.prisma.coupon.create<T>(args);
  }
  async update<T extends Prisma.CouponUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponUpdateArgs>
  ): Promise<Coupon> {
    return this.prisma.coupon.update<T>(args);
  }
  async delete<T extends Prisma.CouponDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CouponDeleteArgs>
  ): Promise<Coupon> {
    return this.prisma.coupon.delete(args);
  }
}
