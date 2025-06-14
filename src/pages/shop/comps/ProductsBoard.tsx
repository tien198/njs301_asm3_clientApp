import type { productsLoader } from "../loader";
import { Await, useLoaderData } from "react-router";
import { Suspense } from "react";
import ProductItem from "../../../components/product/ProductIem";
import ProductsFallback from "../../../components/product/ProductsFallback";

export default function ProductsBoard() {
  const loader: productsLoader = useLoaderData();
  const { products } = loader;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center italic">
      <Suspense fallback={<ProductsFallback />}>
        <Await resolve={products}>
          {(prods) => prods.length > 0
            ? prods.map(i => <ProductItem product={i} key={i.id} />)
            : <p>No products found</p>
          }
        </Await>
      </Suspense>
    </div>
  );
}

