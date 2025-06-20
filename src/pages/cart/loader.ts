import store from "../../store"
import type { ICartItem } from "../../interfaces/cartItem"
import getDefer from "../../ultil/fetcher/getDefer"
import { ServerAPI as API } from "../../ultil/serverAPIs"

export type CartLoader = {
    cart: Promise<ICartItem[] | null | void>
}

export function loader(): CartLoader {
    const storeCart = store.getState().cart.items
    if (storeCart.length > 0) {
        return { cart: Promise.resolve(storeCart) }
    }
    const cart = getDefer<ICartItem[]>({ url: API.cart, includeCookie: true })

    return { cart }
}