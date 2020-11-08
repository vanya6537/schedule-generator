import React from 'react';
import { Layout } from 'src/components/Layout';
import styles from './SomePage.module.scss';
import { useHistory } from 'react-router';

export function SomePage(): JSX.Element {
  const history = useHistory();
  return (
    <>
      <p>This is some page</p>
      <button className={styles.link} onClick={history.goBack}>
        Go back
      </button>
    </>
  );
}
