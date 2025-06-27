import type { productsLoader } from "./loader";
import { Await, useLoaderData } from "react-router";
import { Suspense } from "react";
import ProductItem from "../../components/product/ProductIem";
import ProductsFallback from "../../components/product/ProductsFallback";

export default function ProductsBoard() {
  const loader: productsLoader = useLoaderData();
  const { products } = loader;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center italic">
      <Suspense fallback={<ProductsFallback />}>
        <Await resolve={products}>
          {(prods) => {
            if (!prods)
              return<><p>Failed to load products</p><p>please check your network</p></>

            if (prods.length === 0)
              return <p>No products found</p>

            return prods.map(i =>
              <ProductItem product={i} key={i.id} />
            )
          }
          }
        </Await>
      </Suspense>
    </div>
  );
}

