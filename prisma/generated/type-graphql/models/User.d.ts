import { Post } from "../models/Post";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    email: string;
    name?: string | null;
    posts?: Post[];
    _count?: UserCount | null;
}
