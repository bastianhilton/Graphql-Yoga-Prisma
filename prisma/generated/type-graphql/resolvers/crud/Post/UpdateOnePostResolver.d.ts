import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePostArgs } from "./args/UpdateOnePostArgs";
import { Post } from "../../../models/Post";
export declare class UpdateOnePostResolver {
    updateOnePost(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePostArgs): Promise<Post | null>;
}
