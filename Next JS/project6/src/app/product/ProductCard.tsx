"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ProductService } from "./Product-Service";

export default function ProductCard({ products }: any) {
  const [sortedProducts, setSortedProducts] = useState(products);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const sortProducts = (sortType: string) => {
    let sorted;

    switch (sortType) {
      case "price-asc":
        sorted = [...sortedProducts].sort((a, b) => a.price.raw - b.price.raw);
        break;
      case "price-desc":
        sorted = [...sortedProducts].sort((a, b) => b.price.raw - a.price.raw);
        break;
      case "categories":
        sorted = [...sortedProducts].sort((a, b) => {
          const categoryNamesA = a.categories
            .map((c: any) => c.name)
            .join(", ");
          const categoryNamesB = b.categories
            .map((c: any) => c.name)
            .join(", ");
          return categoryNamesA.localeCompare(categoryNamesB);
        });
        break;
      default:
        sorted = products;
    }

    setSortedProducts(sorted);
  };

  useEffect(() => {
    const sort = searchParams.get("sort");
    if (sort) {
      sortProducts(sort);
    }
  }, [searchParams]);

  const updateSort = (sortType: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", sortType);
    router.replace(`${pathname}?${newParams.toString()}`);
  };
  async function AddToCart(prodId: any) {
    await ProductService.addProduct(prodId);
  }
  return (
    <div className="d-flex">
      <div className="p-3 m-3">
        <button
          className="mb-3 bg-danger"
          onClick={() => updateSort("price-asc")}
        >
          Sort by Price Low-High
        </button>
        <button
          className="mb-3 bg-success"
          onClick={() => updateSort("price-desc")}
        >
          Sort by Price High-Low
        </button>
        <button
          className="bg-secondary"
          onClick={() => updateSort("categories")}
        >
          Sort by Categories
        </button>
      </div>
      <div className="d-flex flex-wrap ">
        {sortedProducts.map((product: any) => (
          <div
            className="card text-center m-4"
            style={{ height: "380px", width: "230px" }}
          >
            <div style={{ backgroundColor: "beige" }}>
              <img src={product.image.url} height={180} width={150} />
            </div>
            <Link href={"/product/" + product.id}>
              <div>
                <h5>{product.name}</h5>
              </div>
            </Link>
            <div>
              <span className="fw-medium fs-5">
                {product.price.formatted_with_symbol}
              </span>
              <br />

              <div style={{ marginBottom: 10 }}>
                <button
                  className="btn btn-warning rounded-pill mt-5"
                  onClick={() => AddToCart(product?.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
