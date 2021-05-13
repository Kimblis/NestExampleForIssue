import { ClientRMQ, RpcException } from '@nestjs/microservices';
export declare class ErrorHandlingProxy extends ClientRMQ {
    serializeError(err: Error): RpcException;
}
