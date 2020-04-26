import { isNumber } from "./helpers";
import { mathOperators, monoMathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush =
      isNumber(item) &&
      !isNumber(prevItem) &&
      !monoMathOperators.hasOwnProperty(prevItem);
    const isValidOperatorPush =
      !isNumber(item) &&
      (mathOperators.hasOwnProperty(item) ||
        monoMathOperators.hasOwnProperty(item)) &&
      (isNumber(prevItem) ||
        (mathOperators.hasOwnProperty(item) &&
          monoMathOperators.hasOwnProperty(prevItem)));

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
