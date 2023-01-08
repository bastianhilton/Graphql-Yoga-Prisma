"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostCreateWithoutAuthorInput = class PostCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostCreateWithoutAuthorInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostCreateWithoutAuthorInput.prototype, "published", void 0);
PostCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostCreateWithoutAuthorInput", {
        isAbstract: true
    })
], PostCreateWithoutAuthorInput);
exports.PostCreateWithoutAuthorInput = PostCreateWithoutAuthorInput;
