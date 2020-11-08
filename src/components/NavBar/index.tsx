import React, { useState } from 'react';
import { Button, Col, Drawer, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './NavBar.module.scss';
import isEqual from 'fast-deep-equal';
import { AppRoutes } from '../../constants/routes';
import DefaultLogo from '../../assets/logo.svg';

type Props = {
  children: JSX.Element;
};

const NavBarComponent = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Row>
        <Col>
          <Button className={styles.menu} type="primary" icon={<MenuOutlined />} onClick={() => setVisible(true)} />
        </Col>
        <Col offset={1}>
          <a href={AppRoutes.Root}>
            <img src={DefaultLogo} className={styles.logo} alt="logo" />
          </a>
        </Col>
      </Row>
      <Drawer title="Topics" placement="left" onClose={() => setVisible(false)} visible={visible}>
        {children}
      </Drawer>
    </nav>
  );
};

export const NavBar = React.memo<Props>(NavBarComponent, isEqual);
