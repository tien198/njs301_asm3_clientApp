import store from "../../store"
import { setAuthen } from "../../store/slices/authenSlice"
import { ServerAPI } from "../../ultil/serverAPIs"

export async function loader() {
    try {
        const res = await fetch(ServerAPI.authenState, { credentials: 'include' })
        const json = await res.json()
        if (!res.ok)
            throw Response.json({ message: 'You could not access this resource' }, {
                status: res.status, ...json
            })
        store.dispatch(setAuthen({ ...json }))
        return null
    } catch (error: any) {
        if (!error.status)
            throw Response.json({ message: 'Couldn\'t to verify your authentication from server. Please check your network!' }, {
                statusText: 'Connect to server Failed'
            })
        else
            throw error
    }
}