import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    posts?: PostOrderByRelationAggregateInput | undefined;
}
