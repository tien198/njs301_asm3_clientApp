import { type ActionFunctionArgs, redirect } from "react-router"
import { addJwt } from "../../../ultil/storageUltil/authenTokenUltil"
import { ServerAPI } from "../../../ultil/serverAPIs"
import type IAuthenResponse from "../../../interfaces/response/fullfill/authenResponse"


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
    })
    if (response.status === 422 || response.status === 401)
        return response
    if (response.status === 200) {
        const authenRes: IAuthenResponse = (await response.json())
        addJwt(authenRes)
    }

    return redirect('/')
}