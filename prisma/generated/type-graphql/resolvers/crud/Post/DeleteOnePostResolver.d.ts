import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePostArgs } from "./args/DeleteOnePostArgs";
import { Post } from "../../../models/Post";
export declare class DeleteOnePostResolver {
    deleteOnePost(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePostArgs): Promise<Post | null>;
}
