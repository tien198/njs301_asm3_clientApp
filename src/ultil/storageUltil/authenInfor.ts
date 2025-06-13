import type IAuthenResponse from "../../interfaces/response/fullfill/authenResponse";

import User from "../../models/User";
import { removeLocalStorageCartItems } from "./cartItemsUltil";
import StorageEnum from "./StorageEnum";

export function addUserInfor(authenRes: IAuthenResponse) {
    localStorage.setItem(StorageEnum.userInfor, JSON.stringify(authenRes.user))
}

export function getUserInfor(): User | undefined {
    const inforJson = localStorage.getItem(StorageEnum.userInfor)
    return User.fromObject(JSON.parse(inforJson!))
}


export function removeUserInfor() {
    localStorage.removeItem(StorageEnum.userInfor)
    removeLocalStorageCartItems()
}