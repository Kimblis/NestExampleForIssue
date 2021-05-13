import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices'

import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '#AppModule'
import { rabbitOptions } from '#Rabbit'
import { INestApplication } from '@nestjs/common'
import { customizedValidationPipe } from '#ValidationPipes'

describe('Subscriptions', () => {
  let client: ClientProxy
  let app: INestApplication

  beforeAll(async () => {
    const fixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        ClientsModule.register([
          {
            name: 'RABBIT',
            transport: Transport.RMQ,
            options: {
              urls: [`amqp://user:pass@localhost:5672`],
              queue: 'RABBIT',
              queueOptions: {
                durable: true,
              },
            },
          },
        ]),
      ],
    }).compile()

    app = fixture.createNestApplication()
    app.connectMicroservice(rabbitOptions)
    app.useGlobalPipes(customizedValidationPipe)
    await app.startAllMicroservicesAsync()
    await app.init()
    client = app.get('RABBIT')
  })

  beforeEach(async () => {})

  afterEach(async () => {})

  afterAll(async () => {
    await app.close()
    client.close()
  })

  describe('subscription/start', () => {
    it('Positive example', async () => {
      const response = await client.send('stop', {}).toPromise()
      expect(response).toBe('Stopped subscription')
    })

    it('Negative example', async () => {
      const response = client.send('subscription', {}).toPromise()

      await expect(response).rejects.toMatchObject({
        message: 'testing',
      })
    })
    it('Negative example', async () => {
      const response = client.send('subscription', {}).toPromise()

      await expect(response).rejects.toMatchObject({
        message: 'testing',
      })
    })
  })
})
