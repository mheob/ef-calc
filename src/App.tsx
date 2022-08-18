import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Calculator } from './components/calculator';

export function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <main>
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}
