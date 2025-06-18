import type IProduct from "../../../interfaces/product";
import type { ICartItem } from "../../../interfaces/cartItem";


export default class CartItem implements Partial<ICartItem> {
    productId?: string
    quantity?: number = 0
    lineTotal?: number
    totalCalc() {
        this.lineTotal = Number(this.price) * Number(this.quantity)
        return this.lineTotal
    }
    static create(product: IProduct, quantity?: number | string): ICartItem {
        const item = new CartItem(product)
        item.quantity = Number(quantity) || 1
        item.totalCalc()
        return item as ICartItem
    }
    constructor(product: IProduct) {
        Object.assign(this, product)
        this.totalCalc()
    }

    category?: string
    img1?: string
    img2?: string
    img3?: string
    img4?: string
    long_desc?: string
    name?: string
    price?: string | number
    short_desc?: string
}