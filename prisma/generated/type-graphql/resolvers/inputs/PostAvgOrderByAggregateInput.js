"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PostAvgOrderByAggregateInput = class PostAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostAvgOrderByAggregateInput.prototype, "authorId", void 0);
PostAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PostAvgOrderByAggregateInput);
exports.PostAvgOrderByAggregateInput = PostAvgOrderByAggregateInput;
