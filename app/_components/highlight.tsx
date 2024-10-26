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
    <RoughNotation type="highlight" color="#bfdbfe" show={show} {...props}>
      {children}
    </RoughNotation>
  );
}
