import Link from "next/link";
import { categories } from "@/lib/sample-data";

export default function Footer() {
  return (
    <footer className="mt-20 bg-plum text-sun-pale">
      <div className="page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-bold text-sun">বিচিত্রা শপ</p>
          <p className="mt-2 text-sm">সবার জন্য একটি বাজার</p>
          <p className="mt-4 max-w-xs text-sm text-sun-pale/80">
            স্বাধীন বিক্রেতাদের নিজস্ব দোকান। প্ল্যাটফর্ম কোনো বিক্রয় কমিশন নেয় না।
          </p>
        </div>
        <div>
          <p className="font-display text-lg font-bold text-sun">ক্যাটেগরি</p>
          <ul className="mt-3 grid gap-1.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}><Link className="hover:underline" href={`/products?category=${c.slug}`}>{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-lg font-bold text-sun">লিংক</p>
          <ul className="mt-3 grid gap-1.5 text-sm">
            <li><Link className="hover:underline" href="/">হোম</Link></li>
            <li><Link className="hover:underline" href="/products">সব পণ্য</Link></li>
            <li><Link className="hover:underline" href="/sell">বিক্রেতা হোন</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sun/20">
        <p className="page py-4 text-xs text-sun-pale/70">© ২০২৬ বিচিত্রা শপ। সব মূল্য বাংলাদেশি টাকায় (৳)।</p>
      </div>
    </footer>
  );
}
