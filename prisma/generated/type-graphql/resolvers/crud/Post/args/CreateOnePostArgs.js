"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePostArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateInput_1 = require("../../../inputs/PostCreateInput");
let CreateOnePostArgs = class CreateOnePostArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateInput_1.PostCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostCreateInput_1.PostCreateInput)
], CreateOnePostArgs.prototype, "data", void 0);
CreateOnePostArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePostArgs);
exports.CreateOnePostArgs = CreateOnePostArgs;
