import type { IAuthenResponse } from "../../../interfaces/response/fullfill/authenResponse"

import { redirect, type ActionFunctionArgs } from "react-router"
import { ServerAPI } from "../../../ultil/serverAPIs"
import { addUserInfor } from "../../../ultil/storageUltil/authenInfor"
import store from "../../../store"
import { show } from "../../../store/modalSlice"
import { setResponse } from "../../../store/responseModalSlice"

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
            addUserInfor(authenRes)
        }
        return redirect('/')
    } catch (error: any) {
        if (!error.status) {
            dispatch(show())
            dispatch(setResponse({
                statusText: 'Failed to connect to server, please check your network',
            }))
        }
    }
}