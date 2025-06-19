import type { LoaderFunctionArgs } from "react-router";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import type { IProduct } from "../../interfaces/product";
import getDefer from "../../ultil/fetcher/getDefer";
import { ServerAPI as API } from "../../ultil/serverAPIs";


// All products loader
export type productsLoader = {
    products: Promise<IProduct[] | null>,
}

export function allLoader(loaderArgs: LoaderFunctionArgs): productsLoader {
    loaderInitiation(loaderArgs)

    const products = getDefer<IProduct[]>(API.products)
        .catch(error => {
            console.error(error); return null;
        })

    return ({ products });
}




// Categorized products loader - load filtered products by category
type categorizedProductLoader = {
    products: Promise<IProduct[] | null>,
}

export function categorizedProductsLoader(args: LoaderFunctionArgs): categorizedProductLoader {
    loaderInitiation(args)
    const params = args.params
    const products = getDefer<IProduct[]>(API.findByCategory + params.category)
        .catch(error => {
            console.error(error); return null;
        })

    return ({ products })
}