import { ValidationError, ValidationPipe } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export const customizedValidationPipe = new ValidationPipe({
  exceptionFactory: (errors: ValidationError[]) => {
    const formattedErrors = errors.map((v) => new RpcException(Object.values(v.constraints).toString()));
    throw formattedErrors;
  },
});
