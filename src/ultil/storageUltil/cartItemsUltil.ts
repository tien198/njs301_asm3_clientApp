import store from "../../store"
import { clearCart } from "../../store/cartSlice"
import StorageEnum from "./StorageEnum"

export function getLocalStorageCartItems() {
    return localStorage.getItem(StorageEnum.cartItems)
}

export function addLocalStorageCartItems(items: any[]) {
    const jsonString = JSON.stringify(items)
    localStorage.setItem(StorageEnum.cartItems, jsonString)
}

export function clearLocalStorageCartItems() {
    localStorage.removeItem(StorageEnum.cartItems)
    store.dispatch(clearCart())
}