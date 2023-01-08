"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
let DeleteOnePostArgs = class DeleteOnePostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], DeleteOnePostArgs.prototype, "where", void 0);
DeleteOnePostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOnePostArgs);
exports.DeleteOnePostArgs = DeleteOnePostArgs;
