interface Props {
  children: React.ReactNode;
  operator: '+' | '-' | 'x' | '/' | '=' | '%' | 'sqrt';
  className?: string;
  notColored?: boolean;
}

export function OperatorButton({ children, operator, className, notColored }: Props): JSX.Element {
  let classes = 'Calculator__button';
  classes += notColored ? '' : ' Calculator__button--operation';
  classes += className ? ` ${className}` : '';

  return (
    <button className={classes} value={operator}>
      {children}
    </button>
  );
}
