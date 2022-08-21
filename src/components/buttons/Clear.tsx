import { MouseEventHandler } from 'react';

import { useStore } from '../../stores/root.store';

export function ClearButton() {
  const resetOutput = useStore((state) => state.resetOutput);

  const handleResetOutput: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.blur();
    resetOutput();
  };

  return (
    <button className="Calculator__button Calculator__button--clear" onClick={handleResetOutput}>
      C
    </button>
  );
}
