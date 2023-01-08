"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateInput_1 = require("../../../inputs/PostCreateInput");
const PostUpdateInput_1 = require("../../../inputs/PostUpdateInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
let UpsertOnePostArgs = class UpsertOnePostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], UpsertOnePostArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateInput_1.PostCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateInput_1.PostCreateInput)
], UpsertOnePostArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateInput_1.PostUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateInput_1.PostUpdateInput)
], UpsertOnePostArgs.prototype, "update", void 0);
UpsertOnePostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePostArgs);
exports.UpsertOnePostArgs = UpsertOnePostArgs;
