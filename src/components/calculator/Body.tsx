import { useKeyPress } from '../../hooks';
import { ClearButton } from '../buttons/Clear';
import { MemoryButton } from '../buttons/Memory';
import { NumberButton } from '../buttons/Number';
import { OperatorButton } from '../buttons/Operator';

export function Body() {
	useKeyPress();

	return (
		<section className="Calculator__body">
			<ClearButton />
			<OperatorButton operator="%" notColored />
			<OperatorButton operator="sqrt" notColored />
			<MemoryButton operator="MC" />

			<MemoryButton operator="MR" />
			<MemoryButton operator="M+" />
			<MemoryButton operator="M-" />
			<OperatorButton operator="/" />

			<NumberButton number="7" />
			<NumberButton number="8" />
			<NumberButton number="9" />
			<OperatorButton operator="*" />

			<NumberButton number="4" />
			<NumberButton number="5" />
			<NumberButton number="6" />
			<OperatorButton operator="-" />

			<NumberButton number="1" />
			<NumberButton number="2" />
			<NumberButton number="3" />
			<OperatorButton operator="+" />

			<NumberButton number="0" doubleWidth className="Calculator__button--bottom-left" />
			<NumberButton number="." />
			<OperatorButton operator="=" className="Calculator__button--bottom-right" />
		</section>
	);
}
