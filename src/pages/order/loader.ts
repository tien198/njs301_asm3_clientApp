import type { LoaderFunctionArgs } from "react-router";
import getDefer from "../../ultil/fetcher/getDefer";
import { ServerAPI as API } from "../../ultil/serverAPIs";
import type { IOrder } from "../../interfaces/order";
import { logoAnimationAcceptDispath } from "../../routes/dispaths/logoAnimationAcceptDispath";

export type OrderLoader = {
    order: Promise<IOrder | null>
}

export function loader(args: LoaderFunctionArgs): OrderLoader {
    logoAnimationAcceptDispath(false)
    const order = getDefer<IOrder>({
        url: API.getOrderById + '/' + args.params.id,
        includeCookie: true
    })

    return { order }
}