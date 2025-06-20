type deferProps = {
    url: string
    includeCookie?: boolean
    token?: string
    actionInFail?: (res: Response) => void
    actionInError?: (error: Error) => void
}

export default async function getDefer<T>(
    { url, includeCookie = false, token, actionInFail, actionInError }
        : deferProps)
    : Promise<T | null> {
    try {
        const headersInit: Record<string, any> = {}
        if (token)
            headersInit['authorization'] = token

        const response = await fetch(url, {
            headers: headersInit,
            credentials: includeCookie ? 'include' : 'same-origin'
        });

        if (response.ok) {
            return await response.json()
        }

        actionInFail?.(response)
        return null

    } catch (error) {
        actionInError?.(error as Error)
        console.error(error);

        return null
    }

}