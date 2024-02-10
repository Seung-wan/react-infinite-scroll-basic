export const PRODUCT_KEYS = {
  ALL: ['users'] as const,
  LISTS: () => [...PRODUCT_KEYS.ALL, 'list'] as const,
  LIST: (filters: string) => [...PRODUCT_KEYS.LISTS(), { filters }] as const,
  DETAILS: () => [...PRODUCT_KEYS.ALL, 'detail'] as const,
  DETAIL: (id: number) => [...PRODUCT_KEYS.DETAILS(), id] as const,
};
