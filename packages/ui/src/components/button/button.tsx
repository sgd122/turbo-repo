import type React from 'react';

import styles from './index.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};
