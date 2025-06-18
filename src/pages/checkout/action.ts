import type { ActionFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { ServerAPI as API } from "../../ultil/serverAPIs";
import { ClientRoutes_absolute as AbsAPI } from "../../ultil/clientRoutes";
import { clearLocalStorageCartItems } from "../../ultil/storageUltil/cartItemsUltil";

export async function checkoutAction(args: ActionFunctionArgs) {
    try {
        const res = await fetch(API.createOrder, {
            method: args.request.method, // POST
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(await args.request.json()),
            credentials: "include"
        })
        if (res.ok) {
            clearLocalStorageCartItems()
            return redirect(AbsAPI.Home)
        }

        alert((await res.json()).message)

    } catch (error) {
        alert('error in checkout action: ' + error)
    }
}
