import { ReactNode } from 'react';

interface DecorativeElementsProps {
  variant?: 'light' | 'dark';
  density?: 'low' | 'medium' | 'high';
  includePatterns?: boolean;
  style?: 'default' | 'dimensional';
}

declare function DecorativeElements(props: DecorativeElementsProps): ReactNode;

export default DecorativeElements; 