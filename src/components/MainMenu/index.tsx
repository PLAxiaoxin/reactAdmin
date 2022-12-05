import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Menu } from 'antd';

import type { MenuProps } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', '/page3', <UserOutlined />, [
    getItem('Tom', '/page3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Comp = () => {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  let firstOpenKey: string = '';
  items.forEach((item: MenuItem) => {
    if (item?.key === currentRoute.pathname) {
      firstOpenKey = item?.key as string;
    }
  });

  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={onOpenChange}
      openKeys={openKeys}
    />
  );
};

export default Comp;
