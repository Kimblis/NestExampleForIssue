import { ClientProxy } from '@nestjs/microservices';
import { HelloService } from './Hello.service';
export declare class HelloController {
    private readonly helloService;
    private client;
    constructor(helloService: HelloService, client: ClientProxy);
    startSubscription(data: any): void;
    stopSubscription(data: any): string;
}
