import { Product } from '../../types/product';

import { httpClient } from '../http-client';

type GetProductsResponse = Product[];

export const productApi = {
  async getProducts({ page, per }: { page: number; per: number }) {
    const { data } = await httpClient.get<GetProductsResponse>('/products', {
      params: {
        page,
        per,
      },
    });

    return data;
  },
};
