import type { LoaderFunctionArgs } from "react-router";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import store from "../../store";
import { productsLoader } from "../../routes/loaders/productsLoaders";
import type IProduct from "../../interfaces/IProduct";


// All products loader
type productLoader = {
    products: Promise<IProduct[]>,
}

export function allLoader(loaderArgs: LoaderFunctionArgs): productLoader {
    loaderInitiation(loaderArgs)

    const fetchedProducts = store.getState().products;

    if (fetchedProducts.length > 0)
        return ({
            products: Promise.resolve(fetchedProducts),
        });
    return ({
        products: productsLoader()
    });
}




// Categorized products loader - load filtered products by category
type categorizedProductLoader = {
    products: Promise<IProduct[]>,
}

export function categorizedProductsLoader(args: LoaderFunctionArgs): categorizedProductLoader {
    loaderInitiation(args)
    const { params } = args

    const fetchedProducts = store.getState().products
    if (fetchedProducts.length > 0){
        const products = fetchedProducts.filter(i => i.category === params.category?.toLocaleLowerCase())
        return ({
            products: Promise.resolve(products)
        })
    }
        
    else
        return ({
            // Immediately Invoked Async Function Expression (IIAFE) || Async IIFE
            products: (async function () {
                const products = await productsLoader()
                return products.filter(i => i.category === params.category?.toLocaleLowerCase())
            })()
        })
}