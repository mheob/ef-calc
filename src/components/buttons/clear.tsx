interface Props {
  className?: string;
}

export function ClearButton({ className }: Props): JSX.Element {
  let classes = 'Calculator__button Calculator__button--clear';
  classes += className ? ` ${className}` : '';

  return <button className={classes}>C</button>;
}
