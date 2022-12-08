import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">NodeBird</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">signup</Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

type AppLayoutProps = {
  children: React.ReactNode
}

export default AppLayout;
