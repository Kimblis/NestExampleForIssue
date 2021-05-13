"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const testing_1 = require("@nestjs/testing");
const _AppModule_1 = require("../../../AppModule");
const _Rabbit_1 = require("../../../Rabbit");
describe('Subscriptions', () => {
    let client;
    let app;
    beforeAll(async () => {
        const fixture = await testing_1.Test.createTestingModule({
            imports: [
                _AppModule_1.AppModule,
                microservices_1.ClientsModule.register([
                    {
                        name: 'RABBIT',
                        transport: microservices_1.Transport.RMQ,
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
        }).compile();
        app = fixture.createNestApplication();
        app.connectMicroservice(_Rabbit_1.rabbitOptions);
        await app.startAllMicroservicesAsync();
        await app.init();
        client = app.get('RABBIT');
    });
    beforeEach(async () => { });
    afterEach(async () => { });
    afterAll(async () => {
        await app.close();
        client.close();
    });
    describe('subscription/start', () => {
        it('Positive example', async () => {
            const response = await client.send('stop', {}).toPromise();
            expect(response).toBe('Stopped subscription');
        });
        it('Negative example', async () => {
            const response = client.send('subscription', {}).toPromise();
            await expect(response).rejects.toMatchObject({
                message: 'testing',
            });
        });
        it('Negative example', async () => {
            const response = client.send('subscription', {}).toPromise();
            await expect(response).rejects.toMatchObject({
                message: 'testing',
            });
        });
    });
});
//# sourceMappingURL=Hello.e2e.js.map