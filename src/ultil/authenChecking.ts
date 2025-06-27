import store from "../store";
import { show } from "../store/modalSlice";
import { setResponse } from "../store/responseModalSlice";
import { ServerAPI } from "./serverAPIs";

export async function authenChecking() {
    const dispatch = store.dispatch
    try {
        const res = await fetch(ServerAPI.authenState, {
            credentials: 'include'
        })
        if (res.ok)
            return true
        else {
            dispatch(show())
            dispatch(setResponse(await res.json()))
            return false
        }
    } catch (error: any) {
        if (!error.status) {
            dispatch(show())
            dispatch(setResponse({
                statusText: 'Failed to connect to server, please check your network',
            }))
        }
    }

}