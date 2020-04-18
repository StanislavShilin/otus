export type ScalarOperationType = (first: number, second: number) => number;
export type MonoOperationType = (value: number) => number;

export const mul: ScalarOperationType = (
  first,
  second,
) => first * second;

export const div: ScalarOperationType = (
  first,
  second
) => first / second;

export const add: ScalarOperationType = (
  first,
  second
) => first + second;

export const minus: ScalarOperationType = (
  first,
  second
) => first - second;

export const exponentiation: ScalarOperationType = (
  first,
  second
) => Math.pow(first, second);

export const squaring: MonoOperationType = (
  value
) => Math.pow(value, 2);

export const factorial: MonoOperationType =(
  value
) => (value != 1) ? value * factorial(value - 1) : 1;

export const monoMathOperators: { [key: string]: MonoOperationType} = {
  "**": squaring,
  "!": factorial,
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "^": exponentiation,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "**": ZERO,
  "!": ZERO,
  "^": ZERO,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
