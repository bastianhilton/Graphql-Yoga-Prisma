"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUser = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserAvgAggregate_1 = require("../outputs/UserAvgAggregate");
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
const UserSumAggregate_1 = require("../outputs/UserSumAggregate");
let AggregateUser = class AggregateUser {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCountAggregate_1.UserCountAggregate)
], AggregateUser.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserAvgAggregate_1.UserAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserAvgAggregate_1.UserAvgAggregate)
], AggregateUser.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserSumAggregate_1.UserSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserSumAggregate_1.UserSumAggregate)
], AggregateUser.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMinAggregate_1.UserMinAggregate)
], AggregateUser.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserMaxAggregate_1.UserMaxAggregate)
], AggregateUser.prototype, "_max", void 0);
AggregateUser = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUser", {
        isAbstract: true
    })
], AggregateUser);
exports.AggregateUser = AggregateUser;
