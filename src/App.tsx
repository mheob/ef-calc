import { Analytics } from '@vercel/analytics/react';

import { Calculator } from './components/calculator';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function App() {
	return (
		<>
			<Header />
			<main>
				<Calculator />
			</main>
			<Footer />
			<Analytics />
		</>
	);
}
