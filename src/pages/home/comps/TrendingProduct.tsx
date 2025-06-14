import type { productsLoader } from "../loader";

import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router";
import ProductModal from "../../../components/modal/ProductModal";
import ProductItem from "../../../components/product/ProductIem";
import ProductsContainer from "../../../components/product/ProductsContainer";
import Container from "../../../components/UI/Container";
import SectionTitle from "../../../components/UI/SectionWithTitle";
import ProductsFallback from "../../../components/product/ProductsFallback";



export default function TrendingProduct() {
  const loader: productsLoader = useRouteLoaderData("home-page") as productsLoader;

  return (
    <Container className="italic">
      <ProductModal />
      <SectionTitle h4="Top Trending Products" h5="Made The Hard Way" />
      <ProductsContainer>
        <Suspense fallback={<ProductsFallback />}>
          <Await resolve={loader.trendingProducts}>
            {(prods) => prods.length > 0
              ? prods.map((i) => (
                <ProductItem product={i} key={i.id} />
              ))
              : <p>No products found</p>
            }
          </Await>
        </Suspense>
      </ProductsContainer>
    </Container>
  );
}

