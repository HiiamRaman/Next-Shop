//decides what order to show them.
import { Product } from "@/types/products.types";
interface SortOptions {
  sort?: string;
}
export function sortProducts(products: Product[], options: SortOptions) {
  const { sort } = options;

  const sortedProducts = [...products];
  if (!sort) {
    return sortedProducts;
  }
  if (sort === "price-low") {
    sortedProducts.sort((a, b) => {
      return a.price - b.price;
    });
  }

  if (sort === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    sortedProducts.sort((a, b) => a.rating - b.rating);
  }

  return sortedProducts;
}


