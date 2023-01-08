"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePost = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostAvgAggregate_1 = require("../outputs/PostAvgAggregate");
const PostCountAggregate_1 = require("../outputs/PostCountAggregate");
const PostMaxAggregate_1 = require("../outputs/PostMaxAggregate");
const PostMinAggregate_1 = require("../outputs/PostMinAggregate");
const PostSumAggregate_1 = require("../outputs/PostSumAggregate");
let AggregatePost = class AggregatePost {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCountAggregate_1.PostCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCountAggregate_1.PostCountAggregate)
], AggregatePost.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostAvgAggregate_1.PostAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostAvgAggregate_1.PostAvgAggregate)
], AggregatePost.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostSumAggregate_1.PostSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostSumAggregate_1.PostSumAggregate)
], AggregatePost.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMinAggregate_1.PostMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMinAggregate_1.PostMinAggregate)
], AggregatePost.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMaxAggregate_1.PostMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMaxAggregate_1.PostMaxAggregate)
], AggregatePost.prototype, "_max", void 0);
AggregatePost = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePost", {
        isAbstract: true
    })
], AggregatePost);
exports.AggregatePost = AggregatePost;
