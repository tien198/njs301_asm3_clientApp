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
    const order = getDefer<IOrder>(API.getOrderById + '/' + args.params.id, true)
        .catch(err => {
            console.error(err); return null;
        })
    return { order }
}