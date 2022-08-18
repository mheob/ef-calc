import { ClearButton } from '../buttons/clear';
import { MemoryButton } from '../buttons/memory';
import { NumberButton } from '../buttons/number';
import { OperatorButton } from '../buttons/operator';

export function Body(): JSX.Element {
  return (
    <section className="Calculator__body">
      <ClearButton />
      <OperatorButton operator="%" notColored>
        %
      </OperatorButton>
      <OperatorButton operator="sqrt" notColored>
        &#8730;
      </OperatorButton>
      <MemoryButton operator="MC" />

      <MemoryButton operator="MR" />
      <MemoryButton operator="M+" />
      <MemoryButton operator="M-" />
      <OperatorButton operator="/">&#247;</OperatorButton>

      <NumberButton number={7} />
      <NumberButton number={8} />
      <NumberButton number={9} />
      <OperatorButton operator="x">&#215;</OperatorButton>

      <NumberButton number={4} />
      <NumberButton number={5} />
      <NumberButton number={6} />
      <OperatorButton operator="-">&#8722;</OperatorButton>

      <NumberButton number={1} />
      <NumberButton number={2} />
      <NumberButton number={3} />
      <OperatorButton operator="+">&#43;</OperatorButton>

      <NumberButton number={0} doubleWidth className="Calculator__button--bottom-left" />
      <NumberButton number="," />
      <OperatorButton operator="=" className="Calculator__button--bottom-right">
        &#61;
      </OperatorButton>
    </section>
  );
}
