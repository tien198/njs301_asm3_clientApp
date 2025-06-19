import type { LoaderFunctionArgs } from "react-router";
import type { IProduct } from "../../interfaces/product";

import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import getDefer from "../../ultil/fetcher/getDefer";
import { ServerAPI as API } from "../../ultil/serverAPIs";



export type productsLoader = {
  trendingProducts: Promise<IProduct[] | null>,
}

export function loader(loaderArgs: LoaderFunctionArgs): productsLoader {
  loaderInitiation(loaderArgs)

  const trendingProducts = getDefer<IProduct[]>(API.products)

  return ({ trendingProducts })
}
