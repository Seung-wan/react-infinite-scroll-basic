import { HTMLAttributes, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

const Spacing = memo(function Spacing({
  direction = 'vertical',
  size,
  ...props
}: Props) {
  return (
    <div
      style={{
        width: direction === 'horizontal' ? `${size}px` : undefined,
        height: direction === 'vertical' ? `${size}px` : undefined,
      }}
      className="flex-none"
      {...props}
    />
  );
});

export default Spacing;
