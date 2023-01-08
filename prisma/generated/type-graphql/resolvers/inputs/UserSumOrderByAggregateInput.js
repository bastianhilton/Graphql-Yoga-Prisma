"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserSumOrderByAggregateInput = class UserSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserSumOrderByAggregateInput.prototype, "id", void 0);
UserSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserSumOrderByAggregateInput", {
        isAbstract: true
    })
], UserSumOrderByAggregateInput);
exports.UserSumOrderByAggregateInput = UserSumOrderByAggregateInput;
