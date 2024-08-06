// wajib (.test / .spec)
import { describe, it, expect } from "vitest";
import { sumAndPlusTen, maxNum, factorial } from "./basic";

describe("SumAndPlusTen", () => {
  it("should return the sum of a + b + 10 is integer", () => {
    // AAA pattern
    // Arrange - set up the test
    const a = 5;
    const b = 10;

    //Act - execute the test
    const result = sumAndPlusTen(a, b);

    // Assert - Check the result
    expect(result).toBe(25);
    // expect(result).toBeNaN();
  });
  it("should return NaN if any of the parameters is not prided", () => {
    const a = 5;
    const b = 10;

    const result = sumAndPlusTen();

    expect(result).toBeNaN();
  });
});

describe("maxNum", () => {
  it("should return the second argument when it is greater", () => {
    expect(maxNum(5, 10)).toBe(10);
  });

  it("should return the first argument when it is greater", () => {
    expect(maxNum(50, 1)).toBe(50);
  });

  it("should return the first argument when both arguments are equal", () => {
    expect(maxNum(5, 5)).toBe(5);
  });

  it("should throw an error if one of the argumentsis not a number", () => {
    expect(() => maxNum(5, "10")).toThrow("only numbers");
  });
});

describe("factorial", () => {
  it("should return NaN if any of the parameters is not prided", () => {
    expect(() => factorial(" ")).toThrow("only Number");
  });

  it("should return the result ", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return n must be > 1", () => {
    expect(() => factorial(-10)).toThrow("number must be a positive integer");
  });

  it("should return 1 when the input 0", () => {
    expect(factorial(0)).toBe(1);
  });
});
