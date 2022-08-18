interface Props {
  operator: 'MR' | 'MC' | 'M+' | 'M-';
  className?: string;
}

export function MemoryButton({ operator, className }: Props): JSX.Element {
  let classes = 'Calculator__button';
  classes += className ? ` ${className}` : '';

  return (
    <button className={classes} value={operator}>
      {operator}
    </button>
  );
}
