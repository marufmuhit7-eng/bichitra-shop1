import Link from "next/link";
import { categories, sellers } from "@/lib/sample-data";
import { trending, recent } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function Section({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  return (
    <section className="page mt-14 sm:mt-20">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="section-title">{title}</h2>
        {href && <Link href={href} className="text-sm font-semibold text-plum underline underline-offset-4">সব দেখুন</Link>}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sun">
        <div className="page grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-[2.6rem] leading-[1.15] text-plum sm:text-6xl">সবার জন্য<br />একটি বাজার</h1>
            <p className="mt-5 max-w-xl text-lg text-plum-deep">
              দেশের স্বাধীন বিক্রেতাদের নিজস্ব দোকান এক জায়গায়। ক্রেতার জন্য সহজ কেনাকাটা, বিক্রেতার জন্য বিক্রয়ে কোনো কমিশন নেই।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">কেনাকাটা শুরু করুন</Link>
              <Link href="/sell" className="btn btn-outline">নিজের দোকান খুলুন</Link>
            </div>
          </div>
          <div className="rounded-[24px] bg-plum p-6 text-sun sm:p-8">
            <p className="font-display text-6xl font-bold">০%</p>
            <p className="mt-1 text-lg">বিক্রয় কমিশন</p>
            <hr className="my-5 border-sun/30" />
            <p className="font-display text-4xl font-bold">৳১৯৯</p>
            <p className="mt-1 text-lg">থেকে শুরু মাসিক প্ল্যান</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <Section title="ক্যাটেগরি">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/products?category=${c.slug}`} className="flex min-h-[76px] items-center gap-3 rounded-card border border-line bg-white px-4 py-3 font-semibold hover:border-plum">
                <span className="text-3xl" aria-hidden>{c.emoji}</span>
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="জনপ্রিয় পণ্য" href="/products?sort=popular">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {trending().map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
      </Section>

      <Section title="নতুন যোগ হয়েছে" href="/products?sort=newest">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {recent().map((p, i) => <ProductCard key={p.slug} product={p} index={i + 1} />)}
        </div>
      </Section>

      {/* Stores */}
      <Section title="জনপ্রিয় দোকান">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sellers.map((s) => (
            <li key={s.slug}>
              <Link href={`/products?seller=${s.slug}`} className="block rounded-card border border-line bg-white p-5 hover:border-plum">
                <p className="font-display text-xl font-bold">{s.name}</p>
                <p className="mt-1 text-sm text-plum/70">{s.district}</p>
                <p className="mt-3 text-sm font-semibold text-plum">দোকানের পণ্য দেখুন</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Why */}
      <Section title="কেন বিচিত্রা শপ">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["প্রতিটি দোকান আলাদা", "বিক্রেতা নিজের নামে নিজের দোকান চালান।"],
            ["যাচাই করা বিক্রেতা", "অ্যাডমিন অনুমোদন ছাড়া কেউ পণ্য প্রকাশ করতে পারেন না।"],
            ["বাংলায় সম্পূর্ণ", "বাংলা ভাষা, টাকার হিসাব ও দেশীয় ঠিকানা ব্যবস্থা।"],
            ["কমিশন ছাড়া বিক্রি", "বিক্রেতা পণ্যের পুরো বিক্রয়মূল্য নিজের কাছে রাখেন।"],
          ].map(([t, d]) => (
            <li key={t} className="rounded-card bg-sun-soft p-5">
              <h3 className="font-display text-lg">{t}</h3>
              <p className="mt-2 text-[15px]">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Become a seller */}
      <section className="page mt-14 sm:mt-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[24px] bg-plum p-8 text-sun sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="!text-sun text-3xl sm:text-4xl">আপনিও বিক্রেতা হোন</h2>
            <p className="mt-3 max-w-xl text-sun-pale">মাসিক ৳১৯৯ থেকে নিজের অনলাইন দোকান। প্রতিটি বিক্রয়ের পুরো টাকা আপনার।</p>
          </div>
          <Link href="/sell" className="btn btn-sun shrink-0">বিস্তারিত দেখুন</Link>
        </div>
      </section>
    </>
  );
}
