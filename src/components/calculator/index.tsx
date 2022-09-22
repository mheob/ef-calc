import { Body } from './Body';
import { Header } from './Header';
import { Result } from './Result';

export function Calculator() {
	return (
		<article className="Calculator">
			<Header />
			<Result />
			<Body />
		</article>
	);
}
