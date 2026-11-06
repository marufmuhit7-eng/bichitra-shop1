import { bnNumber } from "@/lib/format";

export default function Stars({ rating, reviews }: { rating: number; reviews: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1 text-sm" aria-label={`রেটিং ${rating} / ৫`}>
      <span className="text-plum" aria-hidden>
        {"★".repeat(full)}
        <span className="text-line">{"★".repeat(5 - full)}</span>
      </span>
      <span className="text-plum/70">({bnNumber(reviews)})</span>
    </div>
  );
}
