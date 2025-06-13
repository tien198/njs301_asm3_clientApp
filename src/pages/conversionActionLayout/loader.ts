import { data } from "react-router"
import { getJwt } from "../../ultil/storageUltil/authenInfor"

export function loader() {
    const isAuthen = getJwt()
    if (!isAuthen)
        throw data({ message: 'You could not access this resource' }, { status: 401 })
    return null
}