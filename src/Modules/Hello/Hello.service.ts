import { Injectable } from '@nestjs/common'
import { RpcException } from '@nestjs/microservices'

import { Cat } from './Types'

@Injectable()
export class HelloService {
  private readonly cats: Cat[] = []

  public startSubscription() {
    throw new RpcException('testing')
  }

  public stopSubscription() {
    return 'Stopped subscription'
  }
}
