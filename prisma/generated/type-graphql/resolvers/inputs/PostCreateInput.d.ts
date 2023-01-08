import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateInput {
    title: string;
    content?: string | undefined;
    published?: boolean | undefined;
    author: UserCreateNestedOneWithoutPostsInput;
}
