import React from 'react';
import Link from 'next/link';

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <div>
        <Link href="/">NodeBird</Link>
        <Link href="/profile">profile</Link>
        <Link href="/signup">signup</Link>
      </div>
      {children}
    </div>
  );
};

type AppLayoutProps = {
  children: React.ReactNode
}

export default AppLayout;
