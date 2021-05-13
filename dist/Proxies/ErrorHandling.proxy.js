"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlingProxy = void 0;
const microservices_1 = require("@nestjs/microservices");
class ErrorHandlingProxy extends microservices_1.ClientRMQ {
    serializeError(err) {
        return new microservices_1.RpcException(err);
    }
}
exports.ErrorHandlingProxy = ErrorHandlingProxy;
//# sourceMappingURL=ErrorHandling.proxy.js.map