import { redirect } from "react-router";
import { clearUserInfor } from "../../ultil/storageUltil/authenInfor";

export function action() {
    clearUserInfor()
    return redirect('/')
}