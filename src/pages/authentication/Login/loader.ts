import type { LoaderFunctionArgs } from "react-router"
import loaderInitiation from "../../../routes/loaders/0loaderInitiation"

export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args, false)
    return null
}