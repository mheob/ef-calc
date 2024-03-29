import { create } from 'zustand';

import type { NumberInput, OperatorInput } from '../types';
import { calculateByOperator } from '../utils';

type State = {
	output: string;
	result?: string;
	lastOperator?: OperatorInput;
	calculation: string;
	isEditing?: boolean;
};

type Actions = {
	addNumber: (newNumber: NumberInput) => void;
	resetOutput: () => void;
	removeLastNumber: () => void;
	calculate: (operator: OperatorInput) => void;
};

const initialState: State = {
	output: '0',
	calculation: '',
};

export const useStore = create<State & Actions>()((set) => ({
	...initialState,

	addNumber: (newNumber) =>
		set((state) => {
			if (newNumber === '.' && state.output.includes('.')) return { output: state.output };
			if (!state.isEditing || (state.output === '0' && newNumber !== '.')) state.output = '';
			if (!state.isEditing && !state.lastOperator) state.calculation = '';

			return {
				...state,
				output: state.output + newNumber,
				calculation: state.calculation + newNumber,
				isEditing: true,
			};
		}),

	resetOutput: () =>
		set({
			output: '0',
			result: undefined,
			lastOperator: undefined,
			calculation: '',
			isEditing: false,
		}),

	removeLastNumber: () =>
		set((state) => ({
			...state,
			output: state.output.slice(0, -1),
			calculation: state.output.slice(0, -1),
		})),

	calculate: (operator) =>
		set((state) => {
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
					output: result,
					result: undefined,
					lastOperator: undefined,
					isEditing: false,
				};
			}

			if (operator === '%' || operator === 'sqrt') {
				result = calculateByOperator({
					a: state.output,
					operator: operator,
				});

				return { ...state, output: result, calculation: result, isEditing: false };
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
				output: result,
				result: result,
				lastOperator: operator,
				calculation: `${state.calculation} ${operator} `,
				isEditing: false,
			};
		}),
}));
