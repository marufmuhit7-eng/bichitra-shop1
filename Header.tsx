"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/sample-data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-plum/15 bg-sun">
      <div className="page flex items-center gap-3 py-3">
        <button
          className="btn btn-outline !min-h-[44px] !px-3 lg:hidden"
          aria-label="মেনু খুলুন"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <Link href="/" className="font-display text-2xl font-bold leading-none text-plum sm:text-3xl" aria-label="বিচিত্রা শপ হোম">
          বিচিত্রা <span className="text-plum-deep">শপ</span>
        </Link>

        <form action="/products" method="get" role="search" className="mx-2 hidden flex-1 md:block">
          <label htmlFor="q-desktop" className="sr-only">পণ্য খুঁজুন</label>
          <input id="q-desktop" name="q" type="search" className="field" placeholder="পণ্য বা দোকানের নাম লিখুন" />
        </form>

        <nav className="ml-auto hidden items-center gap-5 text-[15px] font-semibold text-plum lg:flex" aria-label="প্রধান মেনু">
          <Link href="/products" className="hover:underline">সব পণ্য</Link>
          <Link href="/sell" className="hover:underline">বিক্রেতা হোন</Link>
        </nav>

        <button className="btn btn-outline ml-auto !px-4 lg:ml-0" disabled aria-label="কার্ট" title="কার্ট শীঘ্রই চালু হবে">
          🛒 <span className="text-sm">০</span>
        </button>
      </div>

      <div className="page pb-3 md:hidden">
        <form action="/products" method="get" role="search">
          <label htmlFor="q-mobile" className="sr-only">পণ্য খুঁজুন</label>
          <input id="q-mobile" name="q" type="search" className="field" placeholder="পণ্য খুঁজুন" />
        </form>
      </div>

      {/* Category strip (desktop) */}
      <div className="hidden border-t border-plum/15 bg-sun-soft lg:block">
        <div className="page flex gap-6 overflow-x-auto py-2 text-sm font-medium text-plum">
          {categories.map((c) => (
            <Link key={c.slug} href={`/products?category=${c.slug}`} className="whitespace-nowrap hover:underline">
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-plum/15 bg-sun-soft lg:hidden" aria-label="মোবাইল মেনু">
          <ul className="page grid gap-1 py-3">
            <li><Link onClick={() => setOpen(false)} href="/products" className="block rounded-lg px-2 py-2.5 font-semibold text-plum">সব পণ্য</Link></li>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link onClick={() => setOpen(false)} href={`/products?category=${c.slug}`} className="block rounded-lg px-2 py-2.5 text-plum-deep">
                  {c.emoji} {c.name}
                </Link>
              </li>
            ))}
            <li><Link onClick={() => setOpen(false)} href="/sell" className="btn btn-primary mt-2 w-full">বিক্রেতা হোন</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
