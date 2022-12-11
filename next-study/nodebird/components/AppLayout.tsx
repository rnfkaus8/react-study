import React from 'react';
import Link from 'next/link';
import {
  Col, Input, Menu, Row,
} from 'antd';

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
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">signup</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴
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
