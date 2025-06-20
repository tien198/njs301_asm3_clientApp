import type { IOrder } from "../interfaces/order"
import type { IOrderItem } from "../interfaces/order/orderItem"
import type { IShippingTracking } from "../interfaces/order/shippingTracking"

export default class Order implements Partial<IOrder> {
    constructor() {    }
    id: string = ''
    userId: string = ''
    userName: string = ''
    shippingTracking: IShippingTracking = {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        district: '',
        postalCode: '',
        isDelivered: false,
        deliveredAt: new Date(),
        status: 'waiting for progress',
        shippingFee: 0,
        trackingNumber: '',
        carrier: ''
    }
    items: IOrderItem[] = []
    totalPrice: number = 0
    discountCode: string = ''
    status: "waiting" | "processing" | "shipped" | "delivered" | "cancelled" = 'waiting'
    paymentMethod: "cod" | "credit_card" | "paypal" | "momo" = 'cod'
    isPaid: boolean = false
    paidAt: Date = new Date()
    // tax: number = 0
}