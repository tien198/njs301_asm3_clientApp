import { redirect, type ActionFunctionArgs } from "react-router";
import { ServerAPI } from "../../ultil/serverAPIs";
import store from "../../store";
import { show, type ModalType } from "../../store/slices/modalSlice";
import { setResponse } from "../../store/slices/responseModalSlice";
import { resetAuthen } from "../../store/slices/authenSlice";

export async function action(args: ActionFunctionArgs) {
    const dispatch = store.dispatch
    try {
        const res = await fetch(ServerAPI.logout, {
            credentials: 'include',
            method: args.request.method
        })
        const json = await res.json()
        if (!res.ok) {
            dispatch(show('error' as ModalType))
            dispatch(setResponse({ status: res.status, ...json }))
            return
        }
        dispatch(resetAuthen())
        return redirect('/')
    } catch  {
        dispatch(show('error' as ModalType))
        dispatch(setResponse({ statusText: 'Could\'t connect to server. Please check your network' }))
    }
}