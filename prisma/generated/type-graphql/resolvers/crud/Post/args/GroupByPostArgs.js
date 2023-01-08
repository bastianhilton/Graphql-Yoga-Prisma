"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostOrderByWithAggregationInput_1 = require("../../../inputs/PostOrderByWithAggregationInput");
const PostScalarWhereWithAggregatesInput_1 = require("../../../inputs/PostScalarWhereWithAggregatesInput");
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
const PostScalarFieldEnum_1 = require("../../../../enums/PostScalarFieldEnum");
let GroupByPostArgs = class GroupByPostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], GroupByPostArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostOrderByWithAggregationInput_1.PostOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPostArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PostScalarFieldEnum_1.PostScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPostArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostScalarWhereWithAggregatesInput_1.PostScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostScalarWhereWithAggregatesInput_1.PostScalarWhereWithAggregatesInput)
], GroupByPostArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPostArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPostArgs.prototype, "skip", void 0);
GroupByPostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPostArgs);
exports.GroupByPostArgs = GroupByPostArgs;
