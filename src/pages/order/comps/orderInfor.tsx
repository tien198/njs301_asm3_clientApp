import type { IOrder } from "../../../interfaces/order"

type Props = {
    order: IOrder | null
}

export default function OrderInfor({ order }: Props) {

    return (
        <>
            <h2 className="text-3xl italic font-light mb-4">INFORMATION ORDER</h2>
            <div className="mb-8 text-sm leading-6">
                <p><strong className="text-gray-500">ID User:</strong> {order?.userId}</p>
                <p><strong className="text-gray-500">Full Name:</strong> {order?.shippingTracking.fullName}</p>
                <p><strong className="text-gray-500">Phone:</strong> {order?.shippingTracking.phone}</p>
                <p><strong className="text-gray-500">Address:</strong> {order?.shippingTracking.address}</p>
                <p><strong className="text-gray-500">Total:</strong> {order?.totalPrice.toLocaleString()} VND</p>
            </div>
        </>
    )

}