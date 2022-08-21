interface Props {
  operator: 'MR' | 'MC' | 'M+' | 'M-';
  className?: string;
}

export function MemoryButton({ operator, className }: Props) {
  let classes = 'Calculator__button';
  classes += className ? ` ${className}` : '';

  return <button className={classes}>{operator}</button>;
}
