import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostOrThrowArgs } from "./args/FindFirstPostOrThrowArgs";
import { Post } from "../../../models/Post";
export declare class FindFirstPostOrThrowResolver {
    findFirstPostOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPostOrThrowArgs): Promise<Post | null>;
}
