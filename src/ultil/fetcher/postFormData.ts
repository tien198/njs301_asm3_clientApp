import type { ActionFunctionArgs } from "react-router";
import ErrorRes from "../../models/errorResponse";

type postFormDataArgs<T extends object> = {
    args: ActionFunctionArgs,
    url: string,
    includeCookie?: boolean,
    token?: string,
    actionInDone?: (jsonRes: T) => any,
    actionInFailed?: (jsonRes: ErrorRes<T>) => any,
    actionInError?: (error: any) => any
}
/**
 * use with <Form> or submit default - encType:'multipart/form-data'
 */

export async function postFormData<T extends object>(
    { args, url, includeCookie = false, token, actionInDone, actionInFailed, actionInError }: postFormDataArgs<T>
): Promise<T | ErrorRes<T> | undefined> {

    const formData = await args.request.formData()
    let headersInit: Record<string, any> = {}
    if (token)
        headersInit['authorization'] = token

    headersInit = {
        ...headersInit,
        // 'content-type': 'multipart/form-data',
        ...args.request.headers
    }

    const res = await fetch(url, {
        method: args.request.method,
        headers: headersInit,
        body: formData,
        credentials: includeCookie ? 'include' : 'same-origin'
    });
    const json = await res.json()
    if (res.ok)
        return actionInDone ? actionInDone(json) : json as T;

    json.status = res.status
    return actionInFailed ? actionInFailed(json) : json as ErrorRes<T>;
}
