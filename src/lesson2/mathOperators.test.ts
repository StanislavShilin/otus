import { mul, div, add, minus, exponentiation, squaring, factorial } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("exponentiation 2^3 to equal 8", () => {
    expect(exponentiation(2, 3)).toBe(8);
  });

  it("squaring 4 to equal 16", () => {
    expect(squaring(4)).toBe(16);
  });

  it("factorial 4 to equal 24", () => {
    expect(factorial(4)).toBe(24);
  });
});
