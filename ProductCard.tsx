import Link from "next/link";
import type { Product } from "@/lib/sample-data";
import { sellerBySlug } from "@/lib/sample-data";
import { taka, discountPercent } from "@/lib/format";
import ProductImage from "./ProductImage";
import Stars from "./Stars";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const seller = sellerBySlug(product.seller);
  const off = discountPercent(product.price, product.salePrice);
  const out = product.stock === 0;

  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-line bg-white">
      <Link href={`/products/${product.slug}`} className="relative block">
        <ProductImage category={product.category} seed={index} />
        {off > 0 && (
          <span className="absolute left-2 top-2 rounded-full bg-plum px-2.5 py-0.5 text-xs font-semibold text-sun">
            {off}% ছাড়
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
        <p className="text-xs text-plum/70">{seller?.name}</p>
        <h3 className="font-body text-[15px] font-semibold leading-snug">
          <Link href={`/products/${product.slug}`} className="hover:underline">{product.name}</Link>
        </h3>
        <Stars rating={product.rating} reviews={product.reviews} />
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-plum">{taka(product.salePrice ?? product.price)}</span>
          {product.salePrice && <s className="text-sm text-plum/50">{taka(product.price)}</s>}
        </div>
        <p className={`text-xs font-medium ${out ? "text-red-700" : "text-green-800"}`}>
          {out ? "স্টক শেষ" : "স্টকে আছে"}
        </p>
        <div className="mt-auto flex gap-2 pt-2">
          {/* Cart and wishlist are built in Phase 5 / Phase 2. Disabled until then. */}
          <button className="btn btn-primary flex-1 !px-3 text-sm" disabled title="কার্ট সুবিধা শীঘ্রই চালু হবে">
            কার্টে যোগ করুন
          </button>
          <button className="btn btn-outline !px-3" disabled aria-label="উইশলিস্টে রাখুন" title="উইশলিস্ট শীঘ্রই চালু হবে">
            ♡
          </button>
        </div>
      </div>
    </article>
  );
}
