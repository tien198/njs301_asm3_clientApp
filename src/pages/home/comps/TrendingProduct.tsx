import type IProduct from "../../../interfaces/IProduct";

import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router";
import ProductModal from "../../../components/modal/ProductModal";
import ProductItem from "../../../components/product/ProductIem";
import ProductsContainer from "../../../components/product/ProductsContainer";
import Container from "../../../components/UI/Container";
import SectionTitle from "../../../components/UI/SectionWithTitle";
import ProductsFallback from "../../../components/product/ProductsFallback";



export default function TrendingProduct() {
  const loader: any = useRouteLoaderData("home-page");
  const { trendingProducts } = loader;

  return (
    <Container className="italic">
      <ProductModal />
      <SectionTitle h4="Top Trending Products" h5="Made The Hard Way" />
      <ProductsContainer>
        <Suspense fallback={<ProductsFallback />}>
          <Await resolve={trendingProducts}>
            {(loaded: IProduct[]) => {
              return loaded.map((i) => (
                <ProductItem product={i} key={i._id?.$oid} />
              ));
            }}
          </Await>
        </Suspense>
      </ProductsContainer>
    </Container>
  );
}

