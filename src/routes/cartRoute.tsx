import type { RouteObject } from 'react-router-dom'
import { ClientRoutes } from '../ultil/clientRoutes'
import { lazy, Suspense } from 'react'
import { Fallback } from '../components/layout/Fallback'

const CartRoot = lazy(() => import('../pages/cartPage'))
const Cart = lazy(() => import('../pages/cartPage/cart'))
const Checkout = lazy(() => import('../pages/cartPage/checkout'))


const cartRoute: RouteObject = {
    path: ClientRoutes.Cart,
    element: <Suspense fallback={<Fallback />}>
        <CartRoot />
    </Suspense>,
    loader: () => import('../pages/cartPage').then(i => i.loader()),
    children: [
        {
            index: true,
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