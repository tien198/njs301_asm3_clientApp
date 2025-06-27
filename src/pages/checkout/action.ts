import type { ActionFunctionArgs } from "react-router";
import { ServerAPI as API } from "../../ultil/serverAPIs";
import { clearLocalStorageCartItems } from "../../ultil/storageUltil/cartItemsUltil";
import store from "../../store";
import { show } from "../../store/modalSlice";

export async function checkoutAction(args: ActionFunctionArgs) {
    const dispatch = store.dispatch
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
            dispatch(show())
        }
        return
    } catch (error) {
        alert('error in checkout action: ' + error)
    }
}
