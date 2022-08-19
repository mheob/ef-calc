import { MouseEventHandler } from 'react';

import { useStore } from '../../stores/root.store';

interface Props {
  className?: string;
}

export function ClearButton({ className }: Props): JSX.Element {
  let classes = 'Calculator__button Calculator__button--clear';
  classes += className ? ` ${className}` : '';

  const resetOutput = useStore((state) => state.resetOutput);

  const handleResetOutput: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.blur();
    resetOutput();
  };

  return (
    <button className={classes} onClick={handleResetOutput}>
      C
    </button>
  );
}
