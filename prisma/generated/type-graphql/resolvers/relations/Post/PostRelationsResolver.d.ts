import type { GraphQLResolveInfo } from "graphql";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
export declare class PostRelationsResolver {
    author(post: Post, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
