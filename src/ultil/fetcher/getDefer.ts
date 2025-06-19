
export default async function getDefer<T>(url: string, includeCookie = false, token?: string): Promise<T | null> {

    const headersInit: Record<string, any> = {}
    if (token)
        headersInit['authorization'] = token

    const response = await fetch(url, {
        headers: headersInit,
        credentials: includeCookie ? 'include' : 'same-origin'
    }
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json()
}