import { Product } from "@/types/products.types";

interface PaginationOptions {
  page?: string;
  limit?: string;
}

export function paginateProducts(
  products: Product[],
  options: PaginationOptions
) {
const {page,limit} = options;
const currentPage = Number(page)||1;
const pageSize = Number(limit)||10;

const startIndex = (currentPage-1)*pageSize;
const endIndex = startIndex + pageSize
  return products.slice(startIndex,endIndex)
}
