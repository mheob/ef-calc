import { useEffect } from 'react';

import { useStore } from '../stores/root.store';
import { NumberInput, OperatorInput } from '../types';
import { isDeletionInput, isNumericInput, isOperatorInput } from '../utils';

export function useKeyPress(): void {
  const addNumber = useStore((state) => state.addNumber);
  const resetOutput = useStore((state) => state.resetOutput);
  const calculate = useStore((state) => state.calculate);

  const onKeyPress = ({ key }: KeyboardEvent) => {
    if (isDeletionInput(key)) {
      resetOutput();
      return;
    }

    if (isNumericInput(key)) {
      addNumber(key === ',' ? '.' : (key as NumberInput));
      return;
    }

    if (isOperatorInput(key)) {
      calculate(key as OperatorInput);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyPress);
    return () => window.removeEventListener('keyup', onKeyPress);
  }, []);
}
