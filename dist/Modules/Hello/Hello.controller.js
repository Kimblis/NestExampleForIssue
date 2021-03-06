"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const Hello_service_1 = require("./Hello.service");
let HelloController = class HelloController {
    constructor(helloService, client) {
        this.helloService = helloService;
        this.client = client;
    }
    startSubscription(data) {
        return this.helloService.startSubscription();
    }
    stopSubscription(data) {
        return this.helloService.stopSubscription();
    }
};
__decorate([
    microservices_1.MessagePattern('subscription'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "startSubscription", null);
__decorate([
    microservices_1.MessagePattern('stop'),
    __param(0, microservices_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HelloController.prototype, "stopSubscription", null);
HelloController = __decorate([
    common_1.Controller('hello'),
    __param(1, common_1.Inject('RABBIT')),
    __metadata("design:paramtypes", [Hello_service_1.HelloService,
        microservices_1.ClientProxy])
], HelloController);
exports.HelloController = HelloController;
//# sourceMappingURL=Hello.controller.js.map