import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  monoMathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [ZERO, FIRST, SECOND] = mathPriorities;

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    const mathOperator = mathOperators[item];
    const monoMathOperator = monoMathOperators[nextItem];

    if (
      !isNumber(String(item)) &&
      mathOperator &&
      mathOperatorsPriorities[item] === ZERO
    ) {
      if (!mathOperator) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperator(Number(prevItem), Number(nextItem)),
      ];
    } else if (
      !isNumber(String(nextItem)) &&
      monoMathOperator &&
      mathOperatorsPriorities[nextItem] === ZERO
    ) {
      if (!monoMathOperator) {
        throw new TypeError("Unexpected stack!");
      }
      result = [...result.slice(0, -1), monoMathOperator(Number(item))];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
