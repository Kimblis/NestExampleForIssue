import { Test } from '@nestjs/testing';

import { HelloController, HelloService } from '#Modules/Hello';

import { generateMockHelloService, mockCat } from './Mocks';

describe('HelloService', () => {
  let helloService: HelloService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HelloService],
    }).compile();

    helloService = await module.get(HelloService);
  });

  describe('createCats', () => {
    it('should create a new cat and add it to local array', async () => {
      helloService.createCats(mockCat);

      const result = helloService.getCats();

      expect(result).toEqual([mockCat]);
    });
  });
});
