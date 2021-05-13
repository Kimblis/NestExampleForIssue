import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { rabbitOptions } from '#Rabbit';

import { HelloController } from './Hello.controller';
import { HelloService } from './Hello.service';

@Module({
  imports: [ClientsModule.register([rabbitOptions])],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
