import type { IOrderItem } from "./orderItem";
import type { IShippingTracking } from "./shippingTracking";

export interface IOrder {
    id: string;
    userId: string;
    userName: string;
    shippingTracking: IShippingTracking;
    items: IOrderItem[];
    totalPrice: number;
    tax: number;
    discountCode: string;
    status: 'waiting' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    paymentMethod: 'cod' | 'credit_card' | 'paypal' | 'momo';
    isPaid: boolean;
    paidAt?: Date;
}