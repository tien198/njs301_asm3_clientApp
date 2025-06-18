import type { ICartItem } from "./cartItem";
import type IProduct from "./product";

// Shipping tracking
export interface IShippingTracking {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    district: string;
    postalCode: string;
    country: string;

    // Shipping infor
    isDelivered: boolean;
    deliveredAt: Date;
    status: 'waiting for progress' | 'in progress' | 'delivered' | 'cancelled';
    shippingFee: number;
    trackingNumber: string
    carrier: string
}


// Item trong đơn hàng
export interface IOrderItem extends Partial<IProduct> {
    productId: string
    name: string
    priceInOrderTime: number
    category: string
    imageUrl: string
    quantity: number
    lineTotal: number // priceInOrderTime * quantity
}

export interface IOrder {
    shippingTracking: Partial<IShippingTracking> // { fullName: string, email: string, phone: string, address: string }
    items: Partial<ICartItem>[] // { productId: string; quantity: number }
}
