import type { IAuthenResponse } from "../../../interfaces/response/fullfill/authenResponse"

import { redirect, type ActionFunctionArgs } from "react-router"
import { ServerAPI } from "../../../ultil/serverAPIs"
import store from "../../../store"
import { show } from "../../../store/slices/modalSlice"
import { setResponse } from "../../../store/slices/responseModalSlice"
import { setAuthen } from "../../../store/slices/authenSlice"

export async function action(args: ActionFunctionArgs) {
    const dispatch = store.dispatch

    try {
        const data = Object.fromEntries((await args.request.formData()).entries())

        const response = await fetch(ServerAPI.signup, {
            method: args.request.method,
            headers: {
                // MIME type (media type || content type)
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        if (response.status === 422)
            return response

        if (response.status === 201) {
            const authenRes: IAuthenResponse = (await response.json())
            dispatch(show('error'))
            dispatch(setAuthen(authenRes.user))
        }
        return redirect('/')
    } catch (error: any) {
        if (!error.status) {
            dispatch(show('error'))
            dispatch(setResponse({
                statusText: 'Failed to connect to server, please check your network',
            }))
        }
    }
}