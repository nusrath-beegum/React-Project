import React, { Suspense } from "react";
import ProductCard from "../product/ProductCard";
import { ProductService } from "./Product-Service";

export default async function product() {
  var products = await ProductService.getproducts();

  return (
    <div>
      <Suspense fallback={<span>loading...</span>}>
      <ProductCard products= {products} />
          </Suspense>
    </div>
  );
}
