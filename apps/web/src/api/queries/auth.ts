import type { DataTag } from '@tanstack/react-query';
import { queryOptions } from '@tanstack/react-query'; // React Query에서 QueryOptions 가져오기
import type { Session } from 'next-auth';

import { fetchAuthSession } from '@/api/domains/auth';
import type { CustomQueryOptions } from '@/types/query/custom.queryOptions';

/**
 * AUTH API fetch
 * @returns QueryOptions for fetching auth session
 */
export const queryFetchAuthSession: CustomQueryOptions<
  Session,
  Error,
  DataTag<['fetchAuthSession'], Session>
> = () =>
  queryOptions({
    queryKey: ['fetchAuthSession'],
    queryFn: async () => {
      const result = await fetchAuthSession();
      return result;
    },
  });
