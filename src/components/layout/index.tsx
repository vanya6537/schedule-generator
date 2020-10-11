import React from 'react';
import DefaultLogo from 'src/assets/logo.svg';
import styles from './layout.module.scss';

import isEqual from 'fast-deep-equal';

export type Props = {
  logo?: string;
  children: JSX.Element;
};

function LayoutComponent({ logo, children }: Props): JSX.Element {
  return (
    <div className={styles.layout}>
      <div className={styles.appHeader}>
        <img src={logo || DefaultLogo} className={styles.appLogo} alt="logo" />
        {children}
      </div>
    </div>
  );
}

export const Layout = React.memo<Props>(LayoutComponent, isEqual);
