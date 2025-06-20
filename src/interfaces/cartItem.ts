import type { IProduct } from "./product";

export interface ICartItem extends Partial<Omit<IProduct, 'id'>> {
    productId: string; // ID sản phẩm
    name?: string;
    category?: string; // Danh mục sản phẩm
    price?: string | number
    img1?: string
    img2?: string
    img3?: string
    img4?: string
    long_desc?: string
    short_desc?: string
    quantity: number;  // Số lượng mua
    lineTotal: number; // priceInOrderTime * quantity
}