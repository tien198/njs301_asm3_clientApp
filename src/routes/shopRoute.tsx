import type { RouteObject } from "react-router";

import { lazy, Suspense } from "react";
import { ClientRoutes } from "../ultil/clientRoutes";
import Fallback from "../components/UI/Fallback";

const ShopRoot = lazy(() => import("../layout/shopLayout"));
const Shop = lazy(() => import("../pages/shop"));


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
                    <Shop />
                </Suspense>
            ),
            loader: (args) => import("../pages/shop/loader").then(i => i.allLoader(args)),
        },

        {
            path: ":category",
            element: (
                <Suspense fallback={<Fallback />}>
                    <Shop />
                </Suspense>
            ),
            loader: (args) => import("../pages/shop/loader").then(i => i.categorizedProductsLoader(args)),
        },
    ],
};

export default shopRoute;
