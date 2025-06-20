import type { RouteObject } from 'react-router'
import { ClientRoutes } from '../ultil/clientRoutes'
import { lazy, Suspense } from 'react'
import Fallback from '../components/UI/Fallback'

const CartRoot = lazy(() => import('../layout/conversionActionLayout'))
const Cart = lazy(() => import('../pages/cart'))
const Checkout = lazy(() => import('../pages/checkout'))
const Orders = lazy(() => import('../pages/orders'))
const Order = lazy(() => import('../pages/order'))


const cartRoute: RouteObject = {
    path: '/',
    element: <Suspense fallback={<Fallback />}>
        <CartRoot />
    </Suspense>,
    loader: () => import('../layout/conversionActionLayout/loader').then(i => i.loader()),
    children: [
        {
            path: ClientRoutes.Cart,
            element: <Suspense fallback={<Fallback />}>
                <Cart />
            </Suspense>,
            loader: () => import('../pages/cart/loader').then(i => i.loader()),
            action: (args) => import('../pages/cart/action').then(i => i.cartAction(args)),
        },
        // remove item from cart Route
        {
            path: ClientRoutes.Cart + '/:productId',
            action: (args) => import('../pages/cart/action').then(i => i.cartAction(args)),
        },
        {
            path: ClientRoutes.Checkout,
            element: <Suspense fallback={<Fallback />}>
                <Checkout />
            </Suspense>,
            action: (args) => import('../pages/checkout/action').then(i => i.checkoutAction(args)),
        },
        {
            path: ClientRoutes.Orders,
            element: (
                <Suspense fallback={<Fallback />}>
                    <Orders />
                </Suspense>
            ),
            loader: () => import('../pages/orders/loader').then(i => i.loader()),
        },
        {
            path: ClientRoutes.Order + '/:id',
            element: (
                <Suspense fallback={<Fallback />}>
                    <Order />
                </Suspense>
            ),
            loader: (args) => import('../pages/order/loader').then(i => i.loader(args)),
        }
    ]
}

export default cartRoute