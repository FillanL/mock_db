import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  imgUrl?: string;
  title?: string;
  url?: string;
  user?: UserWhereUniqueInput;
};
