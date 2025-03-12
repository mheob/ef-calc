import { create } from 'zustand';

import type { NumberInput, OperatorInput } from '../types';
import { calculateByOperator } from '../utils';

interface State {
	calculation: string;
	isEditing?: boolean;
	lastOperator?: OperatorInput;
	output: string;
	result?: string;
}

interface Actions {
	addNumber: (newNumber: NumberInput) => void;
	calculate: (operator: OperatorInput) => void;
	removeLastNumber: () => void;
	resetOutput: () => void;
}

const initialState: State = {
	calculation: '',
	output: '0',
};

export const useStore = create<Actions & State>()(set => ({
	...initialState,

	addNumber: newNumber =>
		set(state => {
			if (newNumber === '.' && state.output.includes('.')) return { output: state.output };
			if (!state.isEditing || (state.output === '0' && newNumber !== '.')) state.output = '';
			if (!state.isEditing && !state.lastOperator) state.calculation = '';

			return {
				...state,
				calculation: state.calculation + newNumber,
				isEditing: true,
				output: state.output + newNumber,
			};
		}),

	calculate: operator =>
		set(state => {
			let result: string;
			if (operator === '=') {
				result = state.lastOperator
					? calculateByOperator({
							a: state.result || 0,
							b: state.output,
							operator: state.lastOperator,
						})
					: '0';

				return {
					...state,
					isEditing: false,
					lastOperator: undefined,
					output: result,
					result: undefined,
				};
			}

			if (operator === '%' || operator === 'sqrt') {
				result = calculateByOperator({
					a: state.output,
					operator,
				});

				return { ...state, calculation: result, isEditing: false, output: result };
			}

			if (operator === '*' || operator === '/') {
				result = calculateByOperator({
					a: state.output,
					b: state.result ?? 1,
					operator: state.lastOperator ?? operator,
				});
			} else if (operator === '-') {
				result = calculateByOperator({
					a: state.result ?? 0,
					b: +state.output * -1,
					operator: state.lastOperator ?? operator,
				});
			} else {
				result = calculateByOperator({
					a: state.result ?? 0,
					b: state.output,
					operator: state.lastOperator ?? operator,
				});
			}

			return {
				calculation: `${state.calculation} ${operator} `,
				isEditing: false,
				lastOperator: operator,
				output: result,
				result,
			};
		}),

	removeLastNumber: () =>
		set(state => ({
			...state,
			calculation: state.output.slice(0, -1),
			output: state.output.slice(0, -1),
		})),

	resetOutput: () =>
		set({
			calculation: '',
			isEditing: false,
			lastOperator: undefined,
			output: '0',
			result: undefined,
		}),
}));
