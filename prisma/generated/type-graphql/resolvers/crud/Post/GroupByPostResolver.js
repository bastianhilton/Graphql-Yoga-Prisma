"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByPostArgs_1 = require("./args/GroupByPostArgs");
const Post_1 = require("../../../models/Post");
const PostGroupBy_1 = require("../../outputs/PostGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPostResolver = class GroupByPostResolver {
    async groupByPost(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).post.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PostGroupBy_1.PostGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPostArgs_1.GroupByPostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPostResolver.prototype, "groupByPost", null);
GroupByPostResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], GroupByPostResolver);
exports.GroupByPostResolver = GroupByPostResolver;
