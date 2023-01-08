"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstPostArgs_1 = require("./args/FindFirstPostArgs");
const Post_1 = require("../../../models/Post");
const helpers_1 = require("../../../helpers");
let FindFirstPostResolver = class FindFirstPostResolver {
    async findFirstPost(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Post_1.Post, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPostArgs_1.FindFirstPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPostResolver.prototype, "findFirstPost", null);
FindFirstPostResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], FindFirstPostResolver);
exports.FindFirstPostResolver = FindFirstPostResolver;
