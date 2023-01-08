"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePostResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePostArgs_1 = require("./args/AggregatePostArgs");
const Post_1 = require("../../../models/Post");
const AggregatePost_1 = require("../../outputs/AggregatePost");
const helpers_1 = require("../../../helpers");
let AggregatePostResolver = class AggregatePostResolver {
    async aggregatePost(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePost_1.AggregatePost, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePostArgs_1.AggregatePostArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePostResolver.prototype, "aggregatePost", null);
AggregatePostResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], AggregatePostResolver);
exports.AggregatePostResolver = AggregatePostResolver;
