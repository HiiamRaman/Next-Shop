import {create} from "zustand";
import { CartItem } from "@/types/cart.types";
import { Product } from "@/types/products.types";

interface CartStore{
    cart:CartItem[];
    addToCart:(product:Product)=>void
    removeFromCart:(id:number)=>void;
    increaseQuantity:(id:number)=>void
    decreaseQuantity:(id:number)=>void
    clearCart:()=>void
}


// export const useCartStore  = create<CartStore>((set)=>({
//     cart:[];
//     addToCart:(product)=>{
//        set((state)=>{
//            const existingItem =   state.cart.find(
//                 (item)=>item.id === product.id
//             )
//              if(existingItem){
//             const updatedCart = state.cart.map((item)=>{
//                 if(item.id===product.id){
//                     return{...item,quantity:item.quantity+1}
//                 }
//                 else{
//                     return item;
//                 }
                

//             })
//             return { cart:updatedCart}
//         }


        
//         })
       

//     }
// }))