import React, { useCallback } from 'react';
import { Layout } from 'src/components/Layout';
import styles from './HomePage.module.scss';
import DefaultLogo from '../../assets/logo.svg';
import { useHistory } from 'react-router';
import { AppRoutes } from '../../constants/routes';

export function HomePage(): JSX.Element {
  const history = useHistory();
  const handleClick = useCallback(() => {
    history.push(AppRoutes.SomePage);
  }, [history]);

  return (
    <Layout>
      <>
        <img src={DefaultLogo} className={styles.logo} alt="logo" />
        <p>
          Hey, this is a template for
          <br />
          <code>Innopolis Schedule Generator</code>
        </p>
        <a className={styles.link} href="https://t.me/netslayer" target="_blank" rel="noopener noreferrer">
          Message Me
        </a>
        <button className={styles.link} onClick={handleClick}>
          Go to some page
        </button>
      </>
    </Layout>
  );
}
