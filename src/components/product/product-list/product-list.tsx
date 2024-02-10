import { useIntersectionObserver } from '../../../hooks/common/use-intersection-observer';
import { useGetProductsSuspenseInfiniteQuery } from '../../../hooks/queries/product/use-get-products-suspense-infinite-query';

import { ProductItem } from '..';
import { Spinner } from '../../common';

const PAGE_SIZE = 20;

export default function ProductList() {
  const {
    data: products,
    isFetching,
    fetchNextPage,
  } = useGetProductsSuspenseInfiniteQuery({ per: PAGE_SIZE });

  const ref = useIntersectionObserver({ callback: fetchNextPage });

  return (
    <div className="mt-4">
      <h2>제품 목록</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
      {isFetching && <Spinner />}
      <div ref={ref} />
    </div>
  );
}
