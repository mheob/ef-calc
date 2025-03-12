import type { MouseEventHandler } from 'react';

import { useStore } from '../../stores/root.store';
import type { NumberInput } from '../../types';

interface Props {
	className?: string;
	doubleWidth?: boolean;
	number: NumberInput;
}

export function NumberButton({ className, doubleWidth, number }: Readonly<Props>) {
	let classes = 'Calculator__button';
	classes += doubleWidth ? ' Calculator__button--double-width' : '';
	classes += className ? ` ${className}` : '';

	const addNumber = useStore(state => state.addNumber);

	const handleOnAddNumber: MouseEventHandler<HTMLButtonElement> = event => {
		event.currentTarget.blur();
		addNumber(number);
	};

	return (
		<button className={classes} onClick={handleOnAddNumber} type="button">
			{number === '.' ? ',' : number}
		</button>
	);
}
