import { ReactFitty } from 'react-fitty';

import { useStore } from '../../stores/root.store';

export function Result(): JSX.Element {
  const output = useStore((state) => state.output);

  const localizedOutput = (+output).toLocaleString('DE', { maximumFractionDigits: 15 });

  return (
    <output className="Calculator__result">
      <ReactFitty maxSize={3 * 16 /* => 3rem */}>{localizedOutput}</ReactFitty>
    </output>
  );
}
