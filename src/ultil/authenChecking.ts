import store from "../store";
import { show, type ModalType } from "../store/slices/modalSlice";
import { setResponse } from "../store/slices/responseModalSlice";
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
            dispatch(show('error' as ModalType))
            dispatch(setResponse({ ...await res.json(), status: res.status }))
            return false
        }
    } catch (error: any) {
        if (!error.status) {
            dispatch(show('error'))
            dispatch(setResponse({
                statusText: 'Failed to connect to server, please check your network',
            }))
        }
    }

}