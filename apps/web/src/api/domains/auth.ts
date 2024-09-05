import type { Session } from 'next-auth';

import instance from '@/api/fetch';
import { apiRoute } from '@/api/route';

export const fetchAuthSession = async () => {
  const { data } = await instance.get<Session>(
    apiRoute({ key: 'auth.session', searchParams: undefined })
  );

  return data;
};
