import { queryOptions } from '@tanstack/react-query'; // React Query에서 QueryOptions 가져오기

import { fetchAuthSession } from '@/api/domains/auth';

/**
 * AUTH API fetch
 * @returns QueryOptions for fetching auth session
 */
export const queryFetchAuthSession = () =>
  queryOptions({
    queryKey: ['fetchAuthSession'],
    queryFn: async () => {
      const result = await fetchAuthSession();
      return result;
    },
  });
