export const operatorInputsKeys = ['+', '-', '*', '/', '=', '%', 'sqrt'];
export const operatorInputs = ['+', '-', '*', '/', '=', '%', 'sqrt'] as const;
export type OperatorInput = (typeof operatorInputs)[number];

export const operatorEntity: Record<OperatorInput, string> = {
	'%': '&#37;',
	'*': '&#215;',
	'+': '&#43;',
	'-': '&#8722;',
	'/': '&#247;',
	'=': '&#61;',
	sqrt: '&#8730;',
};
