"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserAvgOrderByAggregateInput = class UserAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserAvgOrderByAggregateInput.prototype, "id", void 0);
UserAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserAvgOrderByAggregateInput", {
        isAbstract: true
    })
], UserAvgOrderByAggregateInput);
exports.UserAvgOrderByAggregateInput = UserAvgOrderByAggregateInput;
