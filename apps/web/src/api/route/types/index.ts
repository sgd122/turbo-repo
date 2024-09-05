import type {
  AuthApiRouteKey,
  AuthApiRouteParams,
  AuthKeys,
} from '@/api/route/types/auth';
import type {
  MainApiRouteKey,
  MainApiRouteParams,
  MainKeys,
} from '@/api/route/types/main';

export type ApiRouteKey = MainKeys | AuthKeys;

export interface ApiRouteParamsWithSearchParams<
  K extends ApiRouteKey,
  P extends object | undefined,
> {
  key: K;
  searchParams: P;
}

export interface ApiRouteParamsWithoutSearchParams<K extends ApiRouteKey> {
  key: K;
}

export type ApiRouteParams<K extends ApiRouteKey> = K extends MainApiRouteKey
  ? MainApiRouteParams<K>
  : K extends AuthApiRouteKey
    ? AuthApiRouteParams<K>
    : ApiRouteParamsWithoutSearchParams<K>;

export interface URLParams {
  [key: string]: string | number | boolean | null | undefined;
}
