import "jest-extended/all";
import { Factory } from "rosie";
import { initializeFactories } from "./tests/factories";

beforeAll(() => {
    initializeFactories({
        define: (name, constructor) => Factory.define(name, constructor),
    });
});

// Run before each individual test across the entire test suite
beforeEach(() => {
    jest.resetAllMocks();
});
