// import { getProductById } from "@/services/product.service";
// import Image from "next/image";
// import AddToCartButton from "@/components/product/AddToCartButton";
// import { notFound } from "next/navigation";
// interface ProductDetailProp {
//   params: Promise<{ id: string }>;
// }

// async function ProductDetailsPage({ params }: ProductDetailProp) {
//   const { id } = await params;
//   const product = await getProductById(Number(id));
//   if(!product){
//     notFound()
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//       {/* Main Grid Wrapper */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
//         {/* Left Column: Visual Area */}
//         <div className="space-y-6">
//           <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
//             <Image
//               src={product.thumbnail}
//               alt={product.title}
//               fill
//               priority
//               sizes="(max-w-768px) 100vw, 500px"
//               className="object-cover hover:scale-102 transition-transform duration-500"
//             />
//           </div>
//         </div>

//         {/* Right Column: Product Information */}
//         <div className="flex flex-col h-full justify-start pt-2">
//           {/* Category/Breadcrumb Indicator (Static fallback / detail element) */}
//           <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-2">
//             Premium Collection
//           </span>

//           {/* Product Title */}
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-none">
//             {product.title}
//           </h1>

//           {/* Rating and Reviews Row */}
//           <div className="flex items-center gap-3 mt-4">
//             <div className="flex items-center px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold border border-amber-100">
//               ⭐ <span className="ml-1">{product.rating.toFixed(1)}</span>
//             </div>
//             <span className="text-sm text-gray-400">|</span>
//             <span className="text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer underline underline-offset-4">
//               Verified Reviews
//             </span>
//           </div>

//           {/* Price Tag */}
//           <div className="mt-6 pb-6 border-b border-gray-100">
//             <p className="text-4xl font-black text-gray-900 tracking-tight">
//               ${product.price.toLocaleString()}
//             </p>
//           </div>

//           {/* Product Description */}
//           <div className="mt-6">
//             <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
//               Description
//             </h3>
//             <p className="mt-3 text-gray-600 leading-relaxed text-base">
//               {product.description}
//             </p>
//           </div>

//           {/* Call To Action Controls */}
//           <div className="mt-10 pt-6 border-t border-gray-100">
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailsPage;

























import { getProductById } from "@/services/product.service";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
interface ProductDetailProp {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductDetailProp):Promise<Metadata> {
  const { id } = await params;

  const product = await getProductById(Number(id));

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | NovaShop`,
    description: product.description,
  };
}

async function ProductDetailsPage({ params }: ProductDetailProp) {
  const { id } = await params;
  const product = await getProductById(Number(id));
  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Main Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Visual Area */}
        <ProductGallery product={product}/>

        {/* Right Column: Product Information */}
       <ProductInfo product={product}/>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
