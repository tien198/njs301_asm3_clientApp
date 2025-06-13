import { redirect } from "react-router";
import { removeUserInfor } from "../../ultil/storageUltil/authenInfor";

export function action() {
    removeUserInfor()
    return redirect('/')
}