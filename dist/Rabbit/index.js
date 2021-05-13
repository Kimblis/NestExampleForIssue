"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.rabbitOptions = {
    name: 'RABBIT',
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: [`amqp://user:pass@localhost:5672`],
        queue: 'RABBIT',
        queueOptions: {
            durable: true,
        },
    },
};
//# sourceMappingURL=index.js.map