"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const core_1 = require("@nestjs/core");
const _Rabbit_1 = require("./Rabbit");
const AppModule_1 = require("./AppModule");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(AppModule_1.AppModule, _Rabbit_1.rabbitOptions);
    await app.listenAsync();
}
bootstrap();
//# sourceMappingURL=main.js.map