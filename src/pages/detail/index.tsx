import type { IProduct } from "../../interfaces/product";

import Container from "../../components/UI/Container";
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
                <RelatedProducts className="mt-8 mb-32 md:col-start-1 md:col-end-6" />
            </div>
        </Container>
    );
}

