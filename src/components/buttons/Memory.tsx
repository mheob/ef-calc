interface Props {
	className?: string;
	operator: 'M+' | 'M-' | 'MC' | 'MR';
}

export function MemoryButton({ className, operator }: Readonly<Props>) {
	let classes = 'Calculator__button';
	classes += className ? ` ${className}` : '';

	return (
		<button className={classes} type="button">
			{operator}
		</button>
	);
}
