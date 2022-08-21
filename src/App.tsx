import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Calculator } from './components/calculator';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Calculator />
      </main>
      <Footer />
    </>
  );
}
