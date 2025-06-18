import { redirect, type ActionFunctionArgs } from "react-router";
import { ServerAPI as API } from "../../ultil/serverAPIs";
import { ClientRoutes_absolute as AbsAPI } from "../../ultil/clientRoutes";

export async function addToCartAction(args: ActionFunctionArgs) {
    try {
        await fetch(API.addToCart, {
            method: "POST",
            body: JSON.stringify(await args.request.json()),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
        return redirect(AbsAPI.Cart)
    } catch (error) {
        alert(error)
        console.error(error)
    }
}