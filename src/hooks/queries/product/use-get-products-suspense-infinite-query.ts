import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { PRODUCT_KEYS } from '../../../constants/query-keys';

import { productApi } from '../../../apis/product';

export function useGetProductsSuspenseInfiniteQuery({ per }: { per: number }) {
  return useSuspenseInfiniteQuery({
    queryKey: PRODUCT_KEYS.LISTS(),
    queryFn: ({ pageParam }) =>
      productApi.getProducts({ page: pageParam, per }),
    getNextPageParam: (pages, allPages) => {
      if (pages.length !== per) {
        return undefined;
      }

      return allPages.length + 1;
    },
    initialPageParam: 1,
    select: (data) => {
      return data.pages.flatMap((page) => page);
    },
  });
}
