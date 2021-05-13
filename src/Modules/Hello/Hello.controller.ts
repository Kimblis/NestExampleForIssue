import { customizedValidationPipe } from '#ValidationPipes'
import { Controller, Inject, UsePipes, ValidationPipe } from '@nestjs/common'
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices'
import { CreateCatDto } from './dto/CreateCatDto.dto'

import { HelloService } from './Hello.service'
@UsePipes(customizedValidationPipe)
@Controller('hello')
export class HelloController {
  constructor(
    private readonly helloService: HelloService,
    @Inject('RABBIT') private client: ClientProxy
  ) {}

  @MessagePattern('subscription')
  public startSubscription(@Payload() data: CreateCatDto) {
    return this.helloService.startSubscription()
  }

  @MessagePattern('stop')
  public stopSubscription(@Payload() data: any) {
    return this.helloService.stopSubscription()
  }
}
