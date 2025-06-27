import { type ActionFunctionArgs, redirect } from "react-router"
import type { IAuthenResponse } from "../../../interfaces/response/fullfill/authenResponse"

import { ServerAPI } from "../../../ultil/serverAPIs"
import store from "../../../store"
import { show, type ModalType } from "../../../store/slices/modalSlice"
import { setResponse } from "../../../store/slices/responseModalSlice"
import { setAuthen } from "../../../store/slices/authenSlice"


export async function action(args: ActionFunctionArgs) {
    const dispatch = store.dispatch
    const data = Object.fromEntries((await args.request.formData()).entries())
    try {

        const response = await fetch(ServerAPI.login, {
            method: args.request.method,
            headers: {
                // MIME type (media type || content type)
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        if (response.status === 422 || response.status === 401)
            return response
        if (response.status === 200) {
            const authenRes: IAuthenResponse = (await response.json())
            dispatch(setAuthen(authenRes.user))
        }

        return redirect('/')
    } catch (error: any) {
        if (!error.status) {
            dispatch(show('error'as ModalType))
            dispatch(setResponse({
                statusText: 'Failed to connect to server, please check your network',
            }))
        }
    }
}