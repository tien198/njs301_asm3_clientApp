import { data } from "react-router"
import { getUserInfor } from "../../ultil/storageUltil/authenInfor"

export function loader() {
    const isAuthen = getUserInfor()
    if (!isAuthen)
        throw data({ message: 'You could not access this resource' }, { status: 401 })
    return null
}