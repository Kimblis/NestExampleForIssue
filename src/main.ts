import 'source-map-support/register'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { rabbitOptions } from '#Rabbit'

import { AppModule } from './AppModule'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    rabbitOptions
  )
  await app.listenAsync()
}

bootstrap()
