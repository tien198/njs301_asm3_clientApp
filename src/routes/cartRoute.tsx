import type { RouteObject } from 'react-router'
import { ClientRoutes } from '../ultil/clientRoutes'
import { lazy, Suspense } from 'react'
import { Fallback } from '../components/UI/Fallback'

const CartRoot = lazy(() => import('../pages/conversionActionLayout'))
const Cart = lazy(() => import('../pages/cart'))
const Checkout = lazy(() => import('../pages/checkout'))


const cartRoute: RouteObject = {
    path: '/',
    element: <Suspense fallback={<Fallback />}>
        <CartRoot />
    </Suspense>,
    loader: () => import('../pages/conversionActionLayout/loader').then(i => i.loader()),
    children: [
        {
            path: ClientRoutes.Cart,
            element: <Suspense fallback={<Fallback />}>
                <Cart />
            </Suspense>
        },
        {
            path: ClientRoutes.Checkout,
            element: <Suspense fallback={<Fallback />}>
                <Checkout />
            </Suspense>
        },
    ]
}

export default cartRoute