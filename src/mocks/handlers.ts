import { HttpResponse, http } from 'msw';

import { products } from './fixtures/product';

import { delay } from '../utils';

export const handlers = [
  http.get('/products', async ({ request }) => {
    const url = new URL(request.url);

    const page = Number(url.searchParams.get('page'));
    const per = Number(url.searchParams.get('per'));

    const start = (page - 1) * per;
    const end = page * per;

    await delay(500);

    return HttpResponse.json(products.slice(start, end));
  }),
];
