"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostWhereInput_1 = require("../inputs/PostWhereInput");
let PostListRelationFilter = class PostListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostWhereInput_1.PostWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostWhereInput_1.PostWhereInput)
], PostListRelationFilter.prototype, "none", void 0);
PostListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PostListRelationFilter", {
        isAbstract: true
    })
], PostListRelationFilter);
exports.PostListRelationFilter = PostListRelationFilter;
