import type {
  DataTag,
  InitialDataFunction,
  Register,
  UseQueryOptions,
} from '@tanstack/react-query';

export interface CustomQueryOptions<
  TData,
  TError = Error,
  TQueryKey extends DataTag<unknown, TData> = DataTag<unknown, TData>,
> {
  (): UseQueryOptions<
    TData,
    Register extends {
      defaultError: infer TDefaultError;
    }
      ? TDefaultError
      : TError,
    TData,
    TQueryKey extends DataTag<infer TTagData, unknown> ? TTagData : never
  > & {
    initialData?: InitialDataFunction<TData> | undefined;
  } & { queryKey: TQueryKey };
}
