interface Props {
  number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | ',';
  doubleWidth?: boolean;
  className?: string;
}

export function NumberButton({ number, doubleWidth, className }: Props): JSX.Element {
  let classes = 'Calculator__button';
  classes += doubleWidth ? ' Calculator__button--double-width' : '';
  classes += className ? ` ${className}` : '';

  return (
    <button className={classes} value={number}>
      {number}
    </button>
  );
}
