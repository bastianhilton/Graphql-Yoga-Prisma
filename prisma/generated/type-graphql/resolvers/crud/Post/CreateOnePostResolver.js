"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOnePostArgs_1 = require("./args/CreateOnePostArgs");
const Post_1 = require("../../../models/Post");
const helpers_1 = require("../../../helpers");
let CreateOnePostResolver = class CreateOnePostResolver {
    async createOnePost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Post_1.Post, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePostArgs_1.CreateOnePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOnePostResolver.prototype, "createOnePost", null);
CreateOnePostResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], CreateOnePostResolver);
exports.CreateOnePostResolver = CreateOnePostResolver;
