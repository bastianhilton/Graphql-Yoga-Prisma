import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePostArgs } from "./args/CreateOnePostArgs";
import { Post } from "../../../models/Post";
export declare class CreateOnePostResolver {
    createOnePost(ctx: any, info: GraphQLResolveInfo, args: CreateOnePostArgs): Promise<Post>;
}
