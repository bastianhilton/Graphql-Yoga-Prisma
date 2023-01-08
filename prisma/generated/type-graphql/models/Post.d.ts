import { User } from "../models/User";
export declare class Post {
    id: number;
    title: string;
    content?: string | null;
    published: boolean;
    author?: User;
    authorId: number;
}
