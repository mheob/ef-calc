import { MouseEventHandler } from 'react';

import { useStore } from '../../stores/root.store';
import { NumberInput } from '../../types';

interface Props {
  number: NumberInput;
  doubleWidth?: boolean;
  className?: string;
}

export function NumberButton({ number, doubleWidth, className }: Props): JSX.Element {
  let classes = 'Calculator__button';
  classes += doubleWidth ? ' Calculator__button--double-width' : '';
  classes += className ? ` ${className}` : '';

  const addNumber = useStore((state) => state.addNumber);

  const handleOnAddNumber: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.blur();
    addNumber(number);
  };

  return (
    <button className={classes} onClick={handleOnAddNumber}>
      {number === '.' ? ',' : number}
    </button>
  );
}
