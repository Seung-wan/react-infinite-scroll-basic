import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { productApi } from '../../../apis/product';

export function useGetProductsSuspenseInfiniteQuery() {
  return useSuspenseInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam }) =>
      productApi.getProducts({ page: pageParam, per: 20 }),
    getNextPageParam: (pages, allPages) => {
      if (pages.length !== 20) {
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
