/// <reference types="jest" />
export declare const generateMockHelloService: () => {
    getCats: jest.Mock<any, any>;
    createCats: jest.Mock<any, any>;
};
export declare const mockCat: {
    name: string;
    age: number;
    breed: string;
};
