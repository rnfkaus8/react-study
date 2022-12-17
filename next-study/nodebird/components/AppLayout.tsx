import React, { useState } from 'react';
import Link from 'next/link';
import {
  Col, Input, Menu, Row,
} from 'antd';
import { UserProfile } from './UserProfile';
import { LoginForm } from './LoginForm';

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">signup</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made By ZeroCho</a>
        </Col>
      </Row>
    </div>
  );
};

type AppLayoutProps = {
  children: React.ReactNode
}

export default AppLayout;
