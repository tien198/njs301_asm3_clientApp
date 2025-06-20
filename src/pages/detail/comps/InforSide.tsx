import type { DetailProps } from ".."
import type { productLoader } from "../loader"

import { Await, useLoaderData } from "react-router"
import convertToFraction from "../../../ultil/convertToFraction"
import AddToCartBtn from "./AddToCartBtn"
import { Suspense } from "react"
import Fallback from "../../../components/UI/Fallback"


function InforSide({ product, className, isFallback = false }: DetailProps) {
    return (
        <div className={`${className} flex flex-col gap-4 h-full justify-between left-in`}>
            <h1 className="uppercase text-black text-3xl 2xl:text-5xl">{isFallback ? <Fallback /> : product!.name}</h1>
            <span className="text-xl">{isFallback ? <Fallback /> : convertToFraction(product!.price) + ' VNĐ'}</span>
            <p>{isFallback ? <Fallback /> : product!.short_desc}</p>
            <p><span className="uppercase text-black mr-2">Category:</span>{isFallback ? <Fallback /> : product!.category}</p>
            <div>
                <AddToCartBtn product={product!} />
            </div>
        </div>
    )
}

export default function InforSideSuspense({ className }: DetailProps) {
    const { product }: productLoader = useLoaderData()
    return (
        <Suspense fallback={<InforSide className={className} isFallback />}>
            <Await resolve={product}>
                {(prod) => prod
                    ? <InforSide product={prod} className={className} />
                    : <p>Product not found</p>
                }
            </Await>
        </Suspense>
    )
}