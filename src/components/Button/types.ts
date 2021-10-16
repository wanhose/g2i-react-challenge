import { ElementType, ReactNode } from 'react';

export type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
};
