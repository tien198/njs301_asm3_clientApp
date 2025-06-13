import { Await, useLoaderData } from "react-router";
import { Suspense } from "react";
import type IProduct from "../../../interfaces/IProduct";
import ProductItem from "../../../components/product/ProductIem";
import ProductsFallback from "../../../components/product/ProductsFallback";

export default function ProductsBoard() {
  const loader: any = useLoaderData();
  const { products } = loader;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center italic">
      <Suspense fallback={<ProductsFallback />}>
        <Await resolve={products}>
          {(loaded: IProduct[]) =>
            loaded.map(i => <ProductItem product={i} key={i._id?.$oid} />)
          }
        </Await>
      </Suspense>
    </div>
  );
}

