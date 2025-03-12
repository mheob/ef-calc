import type { MouseEventHandler } from 'react';

import { useStore } from '../../stores/root.store';
import type { OperatorInput } from '../../types';
import { operatorEntity } from '../../types';

interface Props {
	className?: string;
	notColored?: boolean;
	operator: OperatorInput;
}

export function OperatorButton({ className, notColored, operator }: Readonly<Props>) {
	let classes = 'Calculator__button';
	classes += notColored ? '' : ' Calculator__button--operation';
	classes += className ? ` ${className}` : '';

	const calculate = useStore(state => state.calculate);

	const handleCalculation: MouseEventHandler<HTMLButtonElement> = event => {
		event.currentTarget.blur();
		calculate(operator);
	};

	return (
		<button
			className={classes}
			// eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
			dangerouslySetInnerHTML={{ __html: operatorEntity[operator] }}
			onClick={handleCalculation}
			type="button"
		/>
	);
}
