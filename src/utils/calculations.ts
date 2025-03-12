import type { OperatorInput } from '../types';

type StringOrNumber = number | string;

interface CalculationOptions {
	a: StringOrNumber;
	b?: StringOrNumber;
	operator: OperatorInput;
}

/**
 * Calculates the result of the given one or two numbers and an operator
 *
 * @param CalculationOptions The options for the calculation
 * @param CalculationOptions.a The first number
 * @param CalculationOptions.b The second number
 * @param CalculationOptions.operator The operator
 * @returns The result of the calculation
 */
export function calculateByOperator({ a, b, operator }: CalculationOptions): string {
	b ??= a;

	switch (operator) {
		case '+': {
			return String(add(a, b));
		}
		case '-': {
			return String(subtract(a, b));
		}
		case '*': {
			return String(multiply(a, b));
		}
		case '/': {
			return String(divide(a, b));
		}
		case '%': {
			return String(percentage(a));
		}
		case 'sqrt': {
			return String(sqrt(a));
		}
		default: {
			return String(Number.NaN);
		}
	}
}

/**
 * Adds two numbers
 *
 * @param a The first number
 * @param b The second number
 * @returns The sum of the two numbers
 */
function add(a: StringOrNumber, b: StringOrNumber): string {
	return String(+a + +b);
}

/**
 * Subtracts two numbers
 *
 * @param a The first number
 * @param b The second number
 * @returns The difference of the two numbers
 */
function subtract(a: StringOrNumber, b: StringOrNumber): string {
	return String(+a - +b);
}

/**
 * Multiplies two numbers
 *
 * @param a The first number
 * @param b The second number
 * @returns The product of the two numbers
 */
function multiply(a: StringOrNumber, b: StringOrNumber): string {
	return String(+a * +b);
}

/**
 * Divides two numbers
 *
 * @param a The first number
 * @param b The second number
 * @returns The quotient of the two numbers
 */
function divide(a: StringOrNumber, b: StringOrNumber): string {
	return String(+a / +b);
}

/**
 * Calculates the percentage of a number
 *
 * @param a The number to calculate the percentage of
 * @returns The percentage of the number
 */
function percentage(a: StringOrNumber): string {
	return String(+a / 100);
}

/**
 * Calculates the square root of a number
 *
 * @param a The first number
 * @returns The square root of the number
 */
function sqrt(a: StringOrNumber): string {
	return String(Math.sqrt(+a));
}
