"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserCount = class UserCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], UserCount.prototype, "posts", void 0);
UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {
        isAbstract: true
    })
], UserCount);
exports.UserCount = UserCount;
