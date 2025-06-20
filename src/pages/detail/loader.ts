import type { LoaderFunctionArgs } from "react-router"
import type { IProduct } from "../../interfaces/product"
import loaderInitiation from "../../routes/loaders/0loaderInitiation"
import getDefer from "../../ultil/fetcher/getDefer"
import { ServerAPI as API } from "../../ultil/serverAPIs"

export type productLoader = {
    product: Promise<IProduct | null>
}

export function loader(args: LoaderFunctionArgs): productLoader {
    loaderInitiation(args, false)
    const paramName = Object.keys(args.params)[0]

    const product = getDefer<IProduct>({ url: API.product + args.params[paramName]!, includeCookie: true })
        .catch(err => {
            console.error(err); return null;
        })

    return { product }
}