export const operatorInputsKeys = ['+', '-', '*', '/', '=', '%', 'sqrt'];
export const operatorInputs = ['+', '-', '*', '/', '=', '%', 'sqrt'] as const;
export type OperatorInput = (typeof operatorInputs)[number];

export const operatorEntity: Record<OperatorInput, string> = {
	'+': '&#43;',
	'-': '&#8722;',
	'*': '&#215;',
	'/': '&#247;',
	'=': '&#61;',
	'%': '&#37;',
	sqrt: '&#8730;',
};
