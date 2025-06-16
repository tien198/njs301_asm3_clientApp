import { redirect, type ActionFunctionArgs } from "react-router";
import { postJson } from "../../ultil/fetcher/postJson";
import { ServerAPI as API } from "../../ultil/serverAPIs";
import { ClientRoutes_absolute as AbsAPI } from "../../ultil/clientRoutes";

export async function action(args: ActionFunctionArgs) {
    try {
        await postJson({
            args, url: API.addToCart, includeCookie: true,
        })
        return redirect(AbsAPI.Cart)
    } catch (error) {
        alert(error)
        console.error(error)
    }
}