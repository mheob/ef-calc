import { useEffect, useRef } from 'react';

import efLogo from '../../assets/easyfeedback-logo-inverted.svg';
import { useStore } from '../../stores/root.store';

export function Header() {
	const calculation = useStore(state => state.calculation);

	const outputElement = useRef<HTMLOutputElement>(null);

	useEffect(() => {
		if (!outputElement.current) return;
		outputElement.current.scrollTo({ left: outputElement.current?.scrollWidth });
	}, [calculation]);

	return (
		<header className="Calculator__header">
			<img alt="easyfeedback logo" className="Calculator__header-image" src={efLogo} />
			<output className="Calculator__header-calculation" ref={outputElement}>
				{calculation}
			</output>
		</header>
	);
}
