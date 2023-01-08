"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostSumAggregate = class PostSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PostSumAggregate.prototype, "authorId", void 0);
PostSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostSumAggregate", {
        isAbstract: true
    })
], PostSumAggregate);
exports.PostSumAggregate = PostSumAggregate;
