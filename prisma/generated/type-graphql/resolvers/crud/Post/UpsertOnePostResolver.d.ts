import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePostArgs } from "./args/UpsertOnePostArgs";
import { Post } from "../../../models/Post";
export declare class UpsertOnePostResolver {
    upsertOnePost(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePostArgs): Promise<Post>;
}
