import type { RouteObject } from "react-router";

import { lazy, Suspense } from "react";
import { ClientRoutes } from "../ultil/clientRoutes";
import { Fallback } from "../components/UI/Fallback";

const ShopRoot = lazy(() => import("../pages/shop"));
const ProductsBoard = lazy(() => import("../pages/shop/comps/ProductsBoard"));

const shopRoute: RouteObject = {
    path: ClientRoutes.Shop,
    element: (
        <Suspense fallback={<Fallback />}>
            <ShopRoot />
        </Suspense>
    ),
    children: [
        {
            index: true,
            element: (
                <Suspense fallback={<Fallback />}>
                    <ProductsBoard />
                </Suspense>
            ),
            loader: (args) => import("../pages/shop/loader").then(i => i.allLoader(args)),
        },

        {
            path: ":category",
            element: (
                <Suspense fallback={<Fallback />}>
                    <ProductsBoard />
                </Suspense>
            ),
            loader: (args) => import("../pages/shop/loader").then(i => i.categorizedProductsLoader(args)),
        },
    ],
};

export default shopRoute;
