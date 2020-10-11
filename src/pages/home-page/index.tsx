import React from 'react';
import styles from './styles.module.scss';
import { Layout } from 'src/components/layout';

export function HomePage(): JSX.Element {
  return (
    <Layout>
      <>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={styles.AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </>
    </Layout>
  );
}
