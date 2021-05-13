"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCat = exports.generateMockHelloService = void 0;
const faker_1 = __importDefault(require("faker"));
const generateMockHelloService = () => ({
    getCats: jest.fn(),
    createCats: jest.fn(),
});
exports.generateMockHelloService = generateMockHelloService;
exports.mockCat = {
    name: faker_1.default.name.firstName(1),
    age: faker_1.default.datatype.number(20),
    breed: faker_1.default.name.title(),
};
//# sourceMappingURL=Mocks.js.map