import { redirect, type ActionFunctionArgs } from "react-router";
import { postJson } from "../../ultil/fetcher/postJson";
import { ServerAPI as API } from "../../ultil/serverAPIs";
import { ClientRoutes_absolute as AbsAPI } from "../../ultil/clientRoutes";

export async function action(args: ActionFunctionArgs) {
    const ré =await postJson({
        args, url: API.addToCart, includeCookie: true,
    })
    console.log(ré)

    return redirect(AbsAPI.Cart)
    
}