"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const _Rabbit_1 = require("../../Rabbit");
const Hello_controller_1 = require("./Hello.controller");
const Hello_service_1 = require("./Hello.service");
let HelloModule = class HelloModule {
};
HelloModule = __decorate([
    common_1.Module({
        imports: [microservices_1.ClientsModule.register([_Rabbit_1.rabbitOptions])],
        controllers: [Hello_controller_1.HelloController],
        providers: [Hello_service_1.HelloService],
    })
], HelloModule);
exports.HelloModule = HelloModule;
//# sourceMappingURL=Hello.module.js.map