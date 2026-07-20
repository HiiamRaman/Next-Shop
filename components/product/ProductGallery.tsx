import Image from "next/image";
import { Product } from "@/types/products.types";

interface ProductGalleryProps {
  product: Product;
}

function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="space-y-6">
      <div
        className="
          relative
          aspect-square
          w-full
          overflow-hidden
          rounded-3xl
          bg-slate-50
          border
          border-slate-200
          shadow-sm
        "
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          priority
          sizes="(max-w-768px) 100vw, 500px"
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>
    </div>
  );
}

export default ProductGallery;
