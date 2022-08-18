export const numberInputsKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
export const numberInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'] as const;
export type NumberInput = typeof numberInputs[number];
