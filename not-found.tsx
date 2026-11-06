import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page py-24 text-center">
      <h1 className="text-4xl">পেজটি পাওয়া যায়নি</h1>
      <p className="mt-3">লিংকটি ভুল হতে পারে অথবা পণ্যটি সরিয়ে নেওয়া হয়েছে।</p>
      <Link href="/products" className="btn btn-primary mt-6">সব পণ্য দেখুন</Link>
    </div>
  );
}
