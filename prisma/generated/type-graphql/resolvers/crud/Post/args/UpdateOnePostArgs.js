"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostUpdateInput_1 = require("../../../inputs/PostUpdateInput");
const PostWhereUniqueInput_1 = require("../../../inputs/PostWhereUniqueInput");
let UpdateOnePostArgs = class UpdateOnePostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateInput_1.PostUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateInput_1.PostUpdateInput)
], UpdateOnePostArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostWhereUniqueInput_1.PostWhereUniqueInput)
], UpdateOnePostArgs.prototype, "where", void 0);
UpdateOnePostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePostArgs);
exports.UpdateOnePostArgs = UpdateOnePostArgs;
