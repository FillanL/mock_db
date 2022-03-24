import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  imgUrl?: StringFilter;
  title?: StringFilter;
  url?: StringFilter;
  user?: UserWhereUniqueInput;
};
