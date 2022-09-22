import efLogo from '../assets/easyfeedback-logo.svg';

export function Header() {
	return (
		<header className="Header">
			<h1 className="Header__title">
				<img className="Header__image" src={efLogo} alt="easyfeedback logo" />
				<span className="Header__subtitle">
					Our <b className="Header__emphasis">easy</b> calculator
				</span>
			</h1>
		</header>
	);
}
