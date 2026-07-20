import { Product } from "@/types/products.types";
import AddToCartButton from "./AddToCartButton";


function ProductInfo({
  product,
}: {
  product: Product;
}) {


return (

<div className="flex flex-col">

<span
className="
text-xs
font-semibold
tracking-widest
text-emerald-600
uppercase
"
>
Premium Collection
</span>


<h1
className="
mt-3
text-4xl
font-extrabold
text-slate-900
"
>
{product.title}
</h1>



<div className="flex items-center gap-3 mt-4">

<div
className="
rounded-full
bg-amber-50
px-3
py-1
text-amber-700
font-semibold
"
>
⭐ {product.rating.toFixed(1)}
</div>


<span className="text-slate-400">
Verified Reviews
</span>

</div>




<div className="mt-6 border-b pb-6">

<p
className="
text-4xl
font-black
text-slate-900
"
>
${product.price}
</p>

</div>




<div className="mt-6">

<h3
className="
font-bold
uppercase
text-sm
"
>
Description
</h3>


<p
className="
mt-3
text-slate-600
leading-relaxed
"
>
{product.description}
</p>


</div>




<div className="mt-10">

<AddToCartButton product={product}/>

</div>


</div>

)

}


export default ProductInfo;