import { type ActionFunctionArgs, redirect } from "react-router"
import type { IAuthenResponse } from "../../../interfaces/response/fullfill/authenResponse"

import { ServerAPI } from "../../../ultil/serverAPIs"
import { addUserInfor } from "../../../ultil/storageUltil/authenInfor"


export async function action(args: ActionFunctionArgs) {
    // args
    const data = Object.fromEntries((await args.request.formData()).entries())

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
        addUserInfor(authenRes)
    }

    return redirect('/')
}