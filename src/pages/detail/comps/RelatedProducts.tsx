import { Await, useLoaderData } from "react-router";
import ProductsContainer from "../../../components/product/ProductsContainer";
import type { DetailProps } from "..";
import { Suspense, useEffect, useState } from "react";
import type IProduct from "../../../interfaces/IProduct";
import ProductItem from "../../../components/product/ProductIem";
import ProductsFallback from "../../../components/product/ProductsFallback";
import ProductModal from "../../../components/modal/ProductModal";
import getDefer from "../../../ultil/fetcher/getDefer";
import { ServerAPI as API } from "../../../ultil/serverAPIs";
import type { productLoader } from "../loader";



function RelatedProducts({ product, className, isFallback = false }: DetailProps) {
    const [relatedProds, setRelatedProds] = useState<IProduct[]>()

    // prevent recurion if `isFallback == true` product undefind lead to infinity loop
    !isFallback && useEffect(() => {
        (async function () {
            const relatedProducts = await getDefer<IProduct[]>({ url: API.findByCategory + product!.category })
            setRelatedProds(relatedProducts || [])
        })()
    }, [product])
    return (
        <div className={className}>
            <ProductModal />
            <h4 className="text-2xl uppercase mb-6">Related Products</h4>
            <ProductsContainer >
                {isFallback && <ProductsFallback />}
                {isFallback || !relatedProds && <ProductsFallback />}
                {relatedProds?.map(i => <ProductItem product={i} key={i.id} />)}
            </ProductsContainer>
            {!isFallback && relatedProds?.length === 0 && <div className="bg-zinc-200 py-10 text-center animate-pulse">Any related product found!</div>}
        </div>
    );
}

export default function RelatedProductsSuspense({ className }: DetailProps) {
    const { product }: productLoader = useLoaderData()

    return (
        <Suspense fallback={<RelatedProducts className={className} isFallback />}>
            <Await resolve={product}>
                {(prod) => prod
                    ? <RelatedProducts product={prod} className={className} />
                    : <p>Product not found</p>
                }
            </Await>
        </Suspense>
    )
}
