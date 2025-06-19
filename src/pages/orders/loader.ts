import type { IOrder } from "../../interfaces/order"
import { ServerAPI as API } from "../../ultil/serverAPIs"
import getDefer from "../../ultil/fetcher/getDefer"

export type OrdersLoader = {
    orders: Promise<IOrder[] | null>
}

export function loader(): OrdersLoader {
    const orders = getDefer<IOrder[]>(API.getOrders, true)
        .catch(err => {
            console.error(err); return null;
        })

    return {
        orders: orders
    }
}