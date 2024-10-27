import { RoughNotation, RoughNotationProps } from 'react-rough-notation';

import { ReactNode } from 'react';

export function Highlight({
  show,
  children,
  ...props
}: Omit<RoughNotationProps, 'type' | 'color'> & {
  children: ReactNode;
}) {
  return (
    <RoughNotation type="highlight" color="#99f6e4" show={show} {...props}>
      {children}
    </RoughNotation>
  );
}
