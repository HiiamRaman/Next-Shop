import { Product } from "@/types/products.types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    throw new Error("Failed to Fetch Products");
  }
  const data = await res.json();

  return data.products;
}

export async function getProductById(id: number): Promise<Product | null> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    throw new Error("Failed to Fetch Product");
  }

  const data = await res.json();
  return data;
}
