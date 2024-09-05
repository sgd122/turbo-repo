import { queryFetchAuthSession } from '@/api/queries/auth';
import ViewComponent from '@/app/auth/signin/view';
import HydratePage from '@/components/basic/HydratePage';
import getQueryClient from '@/utils/query/getQueryClient';

const SignIn = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    ...queryFetchAuthSession(),
  });

  return (
    <HydratePage queryClient={queryClient}>
      <ViewComponent />
    </HydratePage>
  );
};
export default SignIn;
