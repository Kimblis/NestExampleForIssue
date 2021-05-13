import { Test } from '@nestjs/testing';

import { HelloController, HelloService } from '#Modules/Hello';

import { generateMockHelloService, mockCat } from './Mocks';

describe('HelloController', () => {
  let helloController: HelloController;
  let helloService: HelloService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [{ provide: HelloService, useFactory: generateMockHelloService }],
    }).compile();

    helloService = await module.get(HelloService);
    helloController = await module.get(HelloController);
  });

  describe('getCats', () => {
    it('should call getCats function in Hello service', async () => {
      helloController.getCats();

      expect(helloService.getCats).toBeCalledTimes(1);
    });
  });

  describe('createCats', () => {
    it('should call createCats function in Hello service with incoming body', async () => {
      helloController.createCats(mockCat);

      expect(helloService.createCats).toBeCalledTimes(1);
      expect(helloService.createCats).toBeCalledWith(mockCat);
    });
  });
});
