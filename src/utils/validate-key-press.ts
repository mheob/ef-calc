import { numberInputsKeys, operatorInputsKeys } from '../types';

/**
 * Checks if the key pressed is the `Enter` key
 *
 * @param key The key that was pressed
 * @returns `true` if the key is the `Enter` key, `false` otherwise
 */
export function isEnterInput(key: string): boolean {
	return key === 'Enter';
}

/**
 * Checks if the key pressed is the `Escape` or `Delete` key
 *
 * @param key The key that was pressed
 * @returns `true` if the key is the `Escape` or `Delete` key, `false` otherwise
 */
export function isDeletionInput(key: string): boolean {
	return key === 'Escape' || key === 'Delete';
}

/**
 * Checks if the key pressed is the `Backspace` key
 *
 * @param key The key that was pressed
 * @returns `true` if the key is the `Backspace` key, `false` otherwise
 */
export function isRemoveInput(key: string): boolean {
	return key === 'Backspace';
}

/**
 * Checks if the key pressed is an numeric or the comma key
 *
 * @param key The key that was pressed
 * @returns `true` if the key is an numeric or the comma key, `false` otherwise
 */
export function isNumericInput(key: string): boolean {
	return numberInputsKeys.includes(key) || key === ',';
}

/**
 * Checks if the key pressed is an operation key
 *
 * @param key The key that was pressed
 * @returns `true` if the key is an operation key, `false` otherwise
 */
export function isOperatorInput(key: string): boolean {
	return operatorInputsKeys.includes(key);
}
