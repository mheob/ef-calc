import create from 'zustand';

import { NumberInput, OperatorInput } from '../types';
import { calculateByOperator } from '../utils';

type State = {
  output: string;
  result?: string;
  isEditing?: boolean;
  lastOperator?: OperatorInput;
};

type Actions = {
  addNumber: (newNumber: NumberInput) => void;
  resetOutput: () => void;
  removeLastNumber: () => void;
  calculate: (operator: OperatorInput) => void;
};

const initialState: State = {
  output: '0',
};

export const useStore = create<State & Actions>()((set) => ({
  ...initialState,

  addNumber: (newNumber) =>
    set((state) => {
      if (newNumber === '.' && state.output.includes('.')) return { output: state.output };
      if (!state.isEditing || (state.output === '0' && newNumber !== '.')) state.output = '';
      return { ...state, output: state.output + newNumber, isEditing: true };
    }),

  resetOutput: () =>
    set({ output: '0', result: undefined, isEditing: false, lastOperator: undefined }),

  removeLastNumber: () => set((state) => ({ ...state, output: state.output.slice(0, -1) })),

  calculate: (operator) =>
    set((state) => {
      let result;
      if (operator === '=') {
        result = state.lastOperator
          ? calculateByOperator({
              a: state.result || 0,
              b: state.output,
              operator: state.lastOperator,
            })
          : '0';

        return { output: result, result: undefined, isEditing: false, lastOperator: undefined };
      }

      if (operator === '%' || operator === 'sqrt') {
        result = calculateByOperator({
          a: state.output,
          operator: operator,
        });

        return { ...state, output: result, isEditing: false };
      }

      if (operator === '*' || operator === '/') {
        result = calculateByOperator({
          a: state.output,
          b: state.result || 1,
          operator: operator,
        });
      } else if (operator === '-') {
        result = calculateByOperator({
          a: state.result || 0,
          b: +state.output * -1,
          operator: operator,
        });
      } else {
        result = calculateByOperator({
          a: state.result || 0,
          b: state.output,
          operator: operator,
        });
      }

      return { output: result, result: result, isEditing: false, lastOperator: operator };
    }),
}));
