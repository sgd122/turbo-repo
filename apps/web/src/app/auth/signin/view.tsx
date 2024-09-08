'use client';
import { signIn, signOut } from 'next-auth/react';

import { useMainCharacterViewModel } from '@/app/auth/signin/hooks';
import { useClientSession } from '@/utils/session/useClientSession';

const ViewComponent = () => {
  useMainCharacterViewModel();
  const { session } = useClientSession();

  return (
    <div>
      <h1>Sign In</h1>
      <button
        onClick={() =>
          signIn('email-password-credentials', {
            email: '123',
            password: '123',
          })
        }
      >
        Sign In
      </button>
      <button onClick={() => signOut()}>Logout</button>
      <div>{JSON.stringify(session?.user)}</div>
    </div>
  );
};

export default ViewComponent;
