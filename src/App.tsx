import { Suspense } from 'react';

import { Footer, Header } from './components/layout';
import { Banner } from './components/home';
import { Spacing } from './components/common';
import { ProductList, ProductListFallback } from './components/product';

export default function App() {
  return (
    <div className="px-4 max-w-[1200px] mx-auto">
      <Header />
      <Spacing size={16} />
      <Banner />
      <Spacing size={16} />
      <Suspense fallback={<ProductListFallback />}>
        <ProductList />
      </Suspense>
      <Spacing size={16} />
      <Footer />
    </div>
  );
}
