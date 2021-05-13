import faker from 'faker';

export const generateMockHelloService = () => ({
  getCats: jest.fn(),
  createCats: jest.fn(),
});

export const mockCat = {
  name: faker.name.firstName(1),
  age: faker.datatype.number(20),
  breed: faker.name.title(),
};
