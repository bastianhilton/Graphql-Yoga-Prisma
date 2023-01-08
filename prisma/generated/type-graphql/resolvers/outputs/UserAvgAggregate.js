"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserAvgAggregate = class UserAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserAvgAggregate.prototype, "id", void 0);
UserAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserAvgAggregate", {
        isAbstract: true
    })
], UserAvgAggregate);
exports.UserAvgAggregate = UserAvgAggregate;
