import { useEffect } from 'react';

import { useStore } from '../stores/root.store';
import { NumberInput, OperatorInput } from '../types';
import {
  isDeletionInput,
  isEnterInput,
  isNumericInput,
  isOperatorInput,
  isRemoveInput,
} from '../utils';

/** Handle keypress events and dispatch the correct actions to the store. */
export function useKeyPress(): void {
  const addNumber = useStore((state) => state.addNumber);
  const removeLastNumber = useStore((state) => state.removeLastNumber);
  const resetOutput = useStore((state) => state.resetOutput);
  const calculate = useStore((state) => state.calculate);

  const onKeyPress = ({ key }: KeyboardEvent): void => {
    if (isDeletionInput(key)) {
      resetOutput();
      return;
    }

    if (isNumericInput(key)) {
      addNumber(key === ',' ? '.' : (key as NumberInput));
      return;
    }

    if (isRemoveInput(key)) {
      removeLastNumber();
      return;
    }

    if (isOperatorInput(key)) {
      calculate(key as OperatorInput);
      return;
    }

    if (isEnterInput(key)) {
      calculate('=');
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyPress);
    return () => window.removeEventListener('keyup', onKeyPress);
  }, []);
}
