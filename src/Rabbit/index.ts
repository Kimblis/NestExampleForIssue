import { ClientProviderOptions, Transport } from '@nestjs/microservices'

export const rabbitOptions: ClientProviderOptions = {
  name: 'RABBIT',
  transport: Transport.RMQ,
  options: {
    urls: [`amqp://user:pass@localhost:5672`],
    queue: 'RABBIT',
    queueOptions: {
      durable: true,
    },
  },
}
