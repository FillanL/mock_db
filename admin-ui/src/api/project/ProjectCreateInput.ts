import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  imgUrl: string;
  title: string;
  url: string;
  user: UserWhereUniqueInput;
};
