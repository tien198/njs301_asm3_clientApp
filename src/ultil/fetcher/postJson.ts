import type { ActionFunctionArgs } from "react-router";
import ErrorRes from "../../models/errorResponse";


type postJsonArgs<T extends object> = {
    args: ActionFunctionArgs,
    url: string,
    includeCookie?: boolean,
    token?: string,
    actionInDone?: (jsonRes: T) => any,
    actionInFailed?: (jsonRes: ErrorRes<T>) => any,
    actionInError?: (error: any) => any
}

/**
 * MUST USE useSubmit() with encType:'application/json'
 *  exp: 
 * const submit = useSubmit();
 * submit({ target }, {
      method: 'post', encType:'application/json'
    })
 */

export async function postJson<T extends object>({
    args, url, includeCookie = false, token, actionInDone, actionInFailed, actionInError
}: postJsonArgs<T>): Promise<T | ErrorRes<T> | undefined> {
    try {
        const data = await args.request.json()
        let headersInit: Record<string, any> = {}
        if (token)
            headersInit['authorization'] = token

        headersInit = {
            ...headersInit,
            // 'content-type': 'application/json',
            ...Object.fromEntries(args.request.headers.entries())
        }
        const requestInit: RequestInit = {
            method: args.request.method,
            headers: headersInit,
            body: JSON.stringify(data),
            credentials: includeCookie ? 'include' : 'same-origin'
        }
        const res = await fetch(url, requestInit);
        const json = await res.json()
        if (res.ok)
            return actionInDone ? actionInDone(json) : json as T;

        return actionInFailed ? actionInFailed(json) : json as ErrorRes<T>;
    } catch (error) {
        console.error(error)
        return actionInError ? actionInError(error) : undefined
    }
}
