import { numberInputsKeys, operatorInputsKeys } from '../types';

export function isDeletionInput(key: string): boolean {
  return key === 'Escape' || key === 'Delete';
}

export function isNumericInput(key: string): boolean {
  return numberInputsKeys.includes(key) || key === ',';
}

export function isOperatorInput(key: string): boolean {
  return operatorInputsKeys.includes(key);
}
