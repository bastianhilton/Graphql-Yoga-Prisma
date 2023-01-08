import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostOrThrowArgs } from "./args/FindUniquePostOrThrowArgs";
import { Post } from "../../../models/Post";
export declare class FindUniquePostOrThrowResolver {
    getPost(ctx: any, info: GraphQLResolveInfo, args: FindUniquePostOrThrowArgs): Promise<Post | null>;
}
