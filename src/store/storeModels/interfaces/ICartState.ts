import type { ICartItem } from "../../../interfaces/cartItem";
import type { IProduct } from "../../../interfaces/product";

export interface ICartState {
    items: ICartItem[]
    currentItemIndex: number
}

export interface ItemWithQuantityPayload {
    item: IProduct
    quantity: number 
}
