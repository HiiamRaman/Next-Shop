import { Product } from "@/types/products.types";

export async function getProducts():Promise<Product[]>{
const  res  = await fetch ("https://dummyjson.com/products");
 const data  = await res.json();
 return data.products;
}

export async function getProductById(id:number):Promise<Product>{

const res = await fetch (`https://dummyjson.com/products/${id}`)

const data = await  res.json();
return data;


}