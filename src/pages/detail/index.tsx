import type IProduct from "../../interfaces/IProduct";
import type { LoaderFunctionArgs } from "react-router";

import Container from "../../components/UI/Container";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import store from "../../store";
import { productLoader } from "../../routes/loaders/productsLoaders";
import ImgSide from "./comps/ImgSide";
import InforSide from "./comps/InforSide";
import DetailDescriptionSide from "./comps/DetailDescriptionSide";
import RelatedProducts from "./comps/RelatedProducts";
import useScrollToTopPage from "../../hooks/useScrollToTopPage";
import useScrollToTopWhenPageIdle from "../../hooks/useScrollToTopWhenPageIdle";

// DetailProps interface is used for `ImgSide.tsx` & `InforSide.tsx`
export interface DetailProps {
    product?: IProduct
    className?: string
    isFallback?: boolean
}

export default function DetailIndex() {
    useScrollToTopPage()
    useScrollToTopWhenPageIdle()

    return (
        <Container className="italic text-zinc-500 text-xs xl:text-sm 2xl:text-xl">
            <div className="grid md:grid-cols-5 gap-4 2xl:gap-10 w-full">
                <ImgSide className="md:col-start-1 md:col-end-3" />
                <InforSide className="md:col-start-3 md:col-end-6" />
                <DetailDescriptionSide className="mt-8 md:col-start-1 md:col-end-6" />
                <RelatedProducts className="mt-8 md:col-start-1 md:col-end-6" />
            </div>
        </Container>
    );
}

type productLoader = {
    product: Promise<IProduct>
}

export function loader(args: LoaderFunctionArgs): productLoader {
    loaderInitiation(args, false)
    const paramName = Object.keys(args.params)[0]
    // find in `fetchedDetailProducts` then `fetchedProducts` if not found
    const product =
        store.getState().fetchedDetailProducts.find((i: IProduct) => i._id === args.params[paramName])
        || store.getState().products.find((i: IProduct) => i._id?.$oid === args.params[paramName])

    if (product)
        return ({
            product: Promise.resolve(product)
        })
    else
        return ({
            // call api to get `product` and dispath this `product` to `fetchedDetailProducts`
            product: productLoader(args.params[paramName]!)
        })
}