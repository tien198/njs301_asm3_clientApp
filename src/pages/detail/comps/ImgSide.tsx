import type { DetailProps } from ".."
import type { IProduct } from "../../../interfaces/product"

import { Suspense, useEffect, useState } from "react"
import { Await, useAsyncValue, useLoaderData } from "react-router"
import Fallback from "../../../components/UI/Fallback"
import type { productLoader } from "../loader"

interface ThumbnailProps {
    imgSrc?: string
    imgAlt?: string
    onHandleThumbnail?: Function
}
function Thumbnail({ imgSrc, imgAlt, onHandleThumbnail }: ThumbnailProps) {
    return <img src={imgSrc} alt={imgAlt}
        onClick={onHandleThumbnail?.bind(null, [imgSrc])}
        className="cursor-pointer h-16 md:h-14 lg:h-16 2xl:h-24 object-cover fade-in" />
}

interface ThumbnailListProps extends DetailProps, ThumbnailProps { }
function ThumbnailList({ product, onHandleThumbnail }: ThumbnailListProps) {
    return (
        <div className="flex flex-col gap-2 h-full">
            {product!.img1 && <Thumbnail imgSrc={product!.img1} imgAlt={product!.name!} onHandleThumbnail={onHandleThumbnail} />}
            {product!.img2 && <Thumbnail imgSrc={product!.img2} imgAlt={product!.name!} onHandleThumbnail={onHandleThumbnail} />}
            {product!.img3 && <Thumbnail imgSrc={product!.img3} imgAlt={product!.name!} onHandleThumbnail={onHandleThumbnail} />}
            {product!.img4 && <Thumbnail imgSrc={product!.img4} imgAlt={product!.name!} onHandleThumbnail={onHandleThumbnail} />}
        </div>
    )
}

interface ImageProps {
    currentImg: string
    setCurrentImg: Function
}
function Image({ currentImg, setCurrentImg }: ImageProps) {
    const prod = useAsyncValue() as IProduct

    useEffect(() => {
        if (prod && prod.img1) setCurrentImg(prod.img1)
    }, [prod])
    return <img src={currentImg} alt={prod?.name} className="h-full w-full object-cover fade-in" />
}

export default function ImgSide({ className }: DetailProps) {
    const { product }: productLoader = useLoaderData()
    const [currentImg, setCurrentImg] = useState<string>('')

    return (
        // Grid template (4 cols) 1fr - 3fr
        <div className={`${className} grid grid-cols-4 gap-4`}>

            <div className="col-start-1 col-end-2">
                <Suspense fallback={<Fallback />}>
                    <Await resolve={product}
                        children={(prod) => prod
                            ? <ThumbnailList product={prod} onHandleThumbnail={setCurrentImg} />
                            : <Fallback />
                        }>
                    </Await>
                </Suspense>
            </div>
            <div className="col-start-2 col-end-5">
                <Suspense fallback={<Fallback />}>
                    <Await resolve={product}>
                        <Image currentImg={currentImg} setCurrentImg={setCurrentImg} />
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}
