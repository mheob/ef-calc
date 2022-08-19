import efLogo from '../../assets/easyfeedback-logo-inverted.svg';
import { useStore } from '../../stores/root.store';

export function Header(): JSX.Element {
  const calculation = useStore((state) => state.calculation);

  return (
    <header className="Calculator__header">
      <img className="Calculator__header-image" src={efLogo} alt="easyfeedback logo" />
      <output className="Calculator__header-last">{calculation}</output>
    </header>
  );
}
