import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-plum text-sun">
      <div className="page flex min-h-[40px] items-center justify-center py-1.5 text-center text-sm">
        <p>
          নিজের অনলাইন দোকান খুলুন, বিক্রয়ে কোনো কমিশন নেই।{" "}
          <Link href="/sell" className="font-semibold underline underline-offset-2">প্ল্যান দেখুন</Link>
        </p>
      </div>
    </div>
  );
}
