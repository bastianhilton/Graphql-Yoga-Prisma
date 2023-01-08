import { PostCreateInput } from "../../../inputs/PostCreateInput";
import { PostUpdateInput } from "../../../inputs/PostUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
export declare class UpsertOnePostArgs {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
}
