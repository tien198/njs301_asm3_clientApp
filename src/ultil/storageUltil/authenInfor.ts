import type IAuthenResponse from "../../interfaces/response/fullfill/authenResponse";
import type IUser from "../../interfaces/IUser";

import { removeLocalStorageCartItems } from "./cartItemsUltil";
import StorageEnum from "./StorageEnum";

export function addUserInfor(authenRes: IAuthenResponse) {
    localStorage.setItem(StorageEnum.userInfor, JSON.stringify(authenRes.user))
}

export function getUserInfor(): IUser | undefined {
    const inforJson = localStorage.getItem(StorageEnum.userInfor)
    return JSON.parse(inforJson!)
}


export function removeUserInfor() {
    localStorage.removeItem(StorageEnum.userInfor)
    removeLocalStorageCartItems()
}