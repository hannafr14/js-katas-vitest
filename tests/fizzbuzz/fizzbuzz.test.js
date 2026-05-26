import {describe, expect, test } from 'vitest';
import { fizzBuzz } from "../../src/fizzbuzz/fizzbuzz.js";

describe('fizzBuzz', () => {
    test("should return Fizz", () => {
        const num = 3;
        const expected = "Fizz";

        const result = fizzBuzz(num);

        expect(result).toBe(expected);
    }); 

    test("should return Buzz", () => {
        const num = 5;
        const expected = "Buzz";

        const result = fizzBuzz(num);

        expect(result).toBe(expected);
    });

    test("should return FizzBuzz", () => {
        const num = 15;
        const expected = "FizzBuzz";

        const result = fizzBuzz(num);

        expect(result).toBe(expected);
    });

    test("should return the number as a string", () => {
        const num = 7;
        const expected = "7";

        const result = fizzBuzz(num);

        expect(result).toBe(expected);
    });

    test("should throw an error when value is not a number", () => {
        expect(() => fizzBuzz("hello")).toThrow("Provided value is not a number");
    });

});