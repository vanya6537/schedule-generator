import React, { useCallback, useState } from 'react';
import styles from './Layout.module.scss';
import { Layout as AntdLayout, Menu as AntMenu } from 'antd';
import { NavBar } from '../NavBar';
import { AppRoutes } from '../../constants/routes';
import { QuestionCircleOutlined, ScheduleOutlined, UserOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import isEqual from 'fast-deep-equal';

export type Props = {
  children: JSX.Element;
};
type NavigationElement = { label?: string; route: string; icon?: JSX.Element };

const { Content, Sider, Header } = AntdLayout;
const { Item } = AntMenu;

const navigation: NavigationElement[] = [
  {
    label: 'Logo',
    route: AppRoutes.Root,
  },
  {
    label: 'Schedule',
    route: AppRoutes.SchedulePage,
    icon: <ScheduleOutlined />,
  },
  {
    label: 'Courses',
    route: AppRoutes.SomePage,
    icon: <VideoCameraAddOutlined />,
  },
  {
    label: 'Admin',
    route: AppRoutes.SomePage,
    icon: <UserOutlined />,
  },
  {
    label: 'About',
    route: AppRoutes.SomePage,
    icon: <QuestionCircleOutlined />,
  },
];

function LayoutComponent({ children }: Props): JSX.Element {
  const history = useHistory();
  const [selectedKey, setSelectedKey] = useState('0');

  const handleClickMenu = useCallback(
    (e: any) => {
      const keyToFind = e.key === 'Logo' ? 'Home' : e.key;
      const route = navigation.find(({ label }) => label === keyToFind)?.route;
      setSelectedKey(keyToFind);
      history.push(route || AppRoutes.Root);
    },
    [history],
  );

  const Menu = (
    <AntMenu mode="inline" selectedKeys={[selectedKey]} onClick={handleClickMenu}>
      {navigation.slice(1).map(({ label, icon }) => (
        <Item key={label} icon={icon}>
          {label}
        </Item>
      ))}
    </AntMenu>
  );

  return (
    <AntdLayout className={styles.layout}>
      <Header>
        <NavBar>{Menu}</NavBar>
      </Header>
      <AntdLayout>
        <>
          <Sider className={styles.sidebar} breakpoint={'lg'} collapsedWidth={0} trigger={null}>
            {Menu}
          </Sider>
          <Content className={styles.container}>{children} </Content>
        </>
      </AntdLayout>
    </AntdLayout>
  );
}

export const Layout = React.memo<Props>(LayoutComponent, isEqual);
