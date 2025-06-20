import { redirect, type ActionFunctionArgs } from "react-router";
import { ServerAPI as API } from "../../ultil/serverAPIs";
import { ClientRoutes_absolute as AbsRoute } from "../../ultil/clientRoutes";

export async function cartAction(args: ActionFunctionArgs) {
    try {
        let productId: string = ''
        if (args.params.productId) {
            productId = '/' + args.params.productId
        }

        await fetch(API.cart + productId, {
            method: args.request.method,
            body: JSON.stringify(await args.request.json() || {}),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
        return redirect(AbsRoute.Cart)
    } catch (error) {
        alert(error)
        console.error(error)
    }
}
