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
            {(prods) => {
              if (!prods)
                return <><p>Failed to load products</p><p>please check your network</p></>

              if (prods.length === 0)
                return <p>No products found</p>

              return prods.map((i) => (
                <ProductItem product={i} key={i.id} />
              ))
            }
            }
          </Await>
        </Suspense>
      </ProductsContainer>
    </Container>
  );
}

