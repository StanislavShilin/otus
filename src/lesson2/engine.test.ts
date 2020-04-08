import { zeroPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("zeroPrioritiesCalc simple cases", () => {
  it("[3, !, +, 5]", () => {
    expect(zeroPrioritiesCalc([3, "!", "+", 5])).toEqual([6, "+", 5]);
  });

  it("[3, /, 4, **]", () => {
    expect(zeroPrioritiesCalc([3, "/", 4, "**"])).toEqual([3, "/", 16]);
  });

  it("[2, +, 2, ^, 3]", () => {
    expect(zeroPrioritiesCalc([2, "+", 2, "^", 3])).toEqual([2, "+", 8]);
  });

  it("[32, /, 4]", () => {
    expect(zeroPrioritiesCalc([32, "/", 4])).toEqual([32, "/", 4]);
  });
});

describe("firstPrioritiesCalc simple cases", () => {
  it("[1, * 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10])).toEqual([
      1,
      "+",
      100,
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});
