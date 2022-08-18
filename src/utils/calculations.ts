import { OperatorInput } from '../types';

type StringOrNumber = string | number;

interface CalculateParameters {
  a: StringOrNumber;
  b?: StringOrNumber;
  operator: OperatorInput;
}

export function calculateByOperator({ a, b, operator }: CalculateParameters): string {
  b ||= a;

  switch (operator) {
    case '+':
      return String(add(a, b));
    case '-':
      return String(subtract(a, b));
    case '*':
      return String(multiply(a, b));
    case '/':
      return String(divide(a, b));
    case '%':
      return String(percentage(a));
    case 'sqrt':
      return String(sqrt(a));
    default:
      return String(NaN);
  }
}

function add(a: StringOrNumber, b: StringOrNumber): string {
  return String(+a + +b);
}

function subtract(a: StringOrNumber, b: StringOrNumber): string {
  return String(+a - +b);
}

function multiply(a: StringOrNumber, b: StringOrNumber): string {
  return String(+a * +b);
}

function divide(a: StringOrNumber, b: StringOrNumber): string {
  return String(+a / +b);
}

function percentage(a: StringOrNumber): string {
  return String(+a / 100);
}

function sqrt(a: StringOrNumber): string {
  return String(Math.sqrt(+a));
}
