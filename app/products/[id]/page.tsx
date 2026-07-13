import React from "react";
import { getProductById } from "@/services/product.service";
import Image from "next/image";
interface ProductDetailProp {
  params: Promise<{ id: string }>;
}
async function ProductDetailsPage({ params }: ProductDetailProp) {
  const { id } = await params;
  const product = await getProductById(Number(id));

 return (
  <div className="max-w-6xl mx-auto px-6 py-10">
    <div className="flex flex-col md:flex-row gap-10">

      {/* Left Side */}
      <div className="md:w-1/2">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="w-full rounded-xl border object-cover"
        />

        <p className="mt-6 text-gray-600 leading-7">
          {product.description}
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col justify-center">

        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="text-yellow-500 text-xl mt-4">
          ⭐ {product.rating}
        </p>

        <p className="text-3xl font-bold mt-4">
          ${product.price}
        </p>

        <button className="mt-8 w-fit bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
          Add To Cart
        </button>

      </div>

    </div>
  </div>
);
}

export default ProductDetailsPage;















//  return (
//     <div className="flex gap-8">
//       <div className=" flex flex-col   h-100 w-1/2  m-10  gap-5 rounded-lg ">
//         <Image
//           src={product.thumbnail}
//           alt={product.title}
//           width={400}
//           height={400}
//           className="rounded-lg"
//         />

//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim modi,
//           tempore nulla obcaecati velit deleniti doloremque facilis dolorem
//           suscipit aliquid repellendus officia pariatur est eaque eveniet,
//           dolorum natus aperiam possimus?
//         </p>
//       </div>
   

//    <div className="flex flex-col gap-5   pt-60  w-1/2   ">
//     <div>{product.title}</div>
//     <p>⭐{product.rating}</p>
//     <p>{product.price}</p>
//    </div>

//     </div>
//   );


