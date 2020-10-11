import React from 'react';
import styles from './Layout.module.scss';

import isEqual from 'fast-deep-equal';

export type Props = {
  children: JSX.Element;
};

function LayoutComponent({ children }: Props): JSX.Element {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export const Layout = React.memo<Props>(LayoutComponent, isEqual);
