import { type ReactNode } from 'react';
interface ParrafoProps {
  children: ReactNode; 
  className?: string; 
}

export function Parrafo({ children, className = '' }: ParrafoProps) {
  return (
    <p className={className}>
      {children}
    </p>
  );
}