'use client';

import type { Session } from 'next-auth';
import type { PropsWithChildren } from 'react';

import AuthContext from '@/context/AuthContext';
import ReactQueryContext from '@/context/ReactQueryContext';

interface Props extends PropsWithChildren {
  session: Session | null;
}

const ClientContext: React.FC<Props> = async ({ session, children }) => {
  return (
    <AuthContext session={session}>
      <ReactQueryContext>{children}</ReactQueryContext>
    </AuthContext>
  );
};

export default ClientContext;
