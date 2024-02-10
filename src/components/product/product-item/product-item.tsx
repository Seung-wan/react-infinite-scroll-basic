import { Product } from '../../../types/product';
import { commaizeNumber } from '../../../utils';

type ProductItemProps = Product;

export default function ProductItem({
  brand_name,
  name,
  cost,
  image_url,
  review_avg,
  review_count,
}: ProductItemProps) {
  return (
    <li>
      <img src={image_url} alt={name} />
      <div>
        <div className="text-gray-400 text-xs">{brand_name}</div>
        <div className="text-sm">{name}</div>
        <div>{commaizeNumber(cost)}</div>
        <div className="flex gap-2">
          <div>{review_avg.toFixed(1)}</div>
          <div>{review_count}</div>
        </div>
      </div>
    </li>
  );
}
