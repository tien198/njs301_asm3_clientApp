import type { LoaderFunctionArgs } from "react-router";
import type IProduct from "../../interfaces/IProduct";

import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import store from "../../store";
import { productsLoader } from "../../routes/loaders/productsLoaders";

export type productLoader = {
  trendingProducts: Promise<IProduct[]>,
}

export function loader(loaderArgs: LoaderFunctionArgs): productLoader {
  loaderInitiation(loaderArgs)
  const fetchedProducts = store.getState().products;

  if (fetchedProducts.length > 0)
    return ({
      trendingProducts: Promise.resolve(fetchedProducts),
    });
  else
    return ({
      trendingProducts: productsLoader(),
    });
}
