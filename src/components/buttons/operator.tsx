import { MouseEventHandler } from 'react';

import { useStore } from '../../stores/root.store';
import { OperatorInput, operatorEntity } from '../../types';

interface Props {
  operator: OperatorInput;
  className?: string;
  notColored?: boolean;
}

export function OperatorButton({ operator, className, notColored }: Props) {
  let classes = 'Calculator__button';
  classes += notColored ? '' : ' Calculator__button--operation';
  classes += className ? ` ${className}` : '';

  const calculate = useStore((state) => state.calculate);

  const handleCalculation: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.blur();
    calculate(operator);
  };

  return (
    <button
      className={classes}
      dangerouslySetInnerHTML={{ __html: operatorEntity[operator] }}
      onClick={handleCalculation}
    />
  );
}
