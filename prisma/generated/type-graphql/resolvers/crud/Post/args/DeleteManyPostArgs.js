"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostWhereInput_1 = require("../../../inputs/PostWhereInput");
let DeleteManyPostArgs = class DeleteManyPostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], DeleteManyPostArgs.prototype, "where", void 0);
DeleteManyPostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPostArgs);
exports.DeleteManyPostArgs = DeleteManyPostArgs;
