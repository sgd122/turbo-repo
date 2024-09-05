import { useQuery } from '@tanstack/react-query';

import { queryFetchAuthSession } from '@/api/queries/auth';
import { useUserInfoStore } from '@/stores/useUserInfoStore';

// TS4023: Exported variable useMainCharacterViewModel has or is using name UserInfoActions from external module
const useMainCharacterViewModel = () => {
  const { data: dataMainCharacter } = useQuery({
    ...queryFetchAuthSession(),
  });

  const userStore = useUserInfoStore();

  return {
    dataMainCharacter,
    ...userStore,
  };
};

export default useMainCharacterViewModel;
