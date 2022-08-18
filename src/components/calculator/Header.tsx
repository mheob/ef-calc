import efLogo from '../../assets/easyfeedback-logo-inverted.svg';

export function Header(): JSX.Element {
  return (
    <header className="Calculator__header">
      <img className="Calculator__header-image" src={efLogo} alt="easyfeedback logo" />
    </header>
  );
}
