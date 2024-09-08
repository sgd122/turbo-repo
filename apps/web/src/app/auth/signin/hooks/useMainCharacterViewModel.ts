import { useQuery } from '@tanstack/react-query';
import type { Session } from 'next-auth';

import { queryFetchAuthSession } from '@/api/queries/auth';
import { useUserInfoStore } from '@/stores/useUserInfoStore';

type UserInfoStore = ReturnType<typeof useUserInfoStore>;

export const useMainCharacterViewModel: () => {
  dataMainCharacter: Session | undefined;
  store: UserInfoStore['store'];
  initializeUserInfo: UserInfoStore['initializeUserInfo'];
} = () => {
  const { data: dataMainCharacter } = useQuery({
    ...queryFetchAuthSession(),
  });

  const userStore: UserInfoStore = useUserInfoStore();

  return {
    dataMainCharacter,
    ...userStore,
  };
};
