import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

import type getQueryClient from '@/utils/query/getQueryClient';

interface Props {
  queryClient: ReturnType<typeof getQueryClient>;
}
const HydratePage: React.FC<PropsWithChildren<Props>> = async ({
  queryClient,
  children,
}) => {
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
};

export default HydratePage;
