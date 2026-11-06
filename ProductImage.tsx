import { categoryBySlug } from "@/lib/sample-data";

const tints = ["#FFF9A8", "#F6E3EC", "#FFE9B0", "#F3D6E3"];

/**
 * Placeholder artwork for development sample products.
 * In Phase 3 sellers upload real photos to Supabase Storage and this
 * component switches to showing them.
 */
export default function ProductImage({ category, seed = 0, large = false }: { category: string; seed?: number; large?: boolean }) {
  const emoji = categoryBySlug(category)?.emoji ?? "🛍️";
  return (
    <div
      className="flex aspect-square w-full items-center justify-center"
      style={{ background: tints[seed % tints.length] }}
      role="img"
      aria-label="নমুনা পণ্যের ছবি"
    >
      <span className={large ? "text-9xl" : "text-6xl"} aria-hidden>{emoji}</span>
    </div>
  );
}
