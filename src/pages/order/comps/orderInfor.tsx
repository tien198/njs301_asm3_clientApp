import Fallback from "../../../components/UI/Fallback"
import type { IOrder } from "../../../interfaces/order"

type Props = {
    order?: Partial<IOrder> | null
    isLoading?: boolean
}

export default function OrderInfor({ order, isLoading = true }: Props) {

    return (
        <>
            <h2 className="text-3xl italic font-light mb-4">INFORMATION ORDER</h2>
            <div className="mb-8 text-sm leading-6">
                <p><strong className="text-gray-500">ID User:</strong> {isLoading ? <div className="inline-block w-32 h-5"><Fallback /></div> : order?.userId}</p>
                <p><strong className="text-gray-500">Full Name:</strong> {isLoading ? <div className="inline-block w-32 h-5"><Fallback /></div> : order?.shippingTracking?.fullName}</p>
                <p><strong className="text-gray-500">Phone:</strong> {isLoading ? <div className="inline-block w-32 h-5"><Fallback /></div> : order?.shippingTracking?.phone}</p>
                <p><strong className="text-gray-500">Address:</strong> {isLoading ? <div className="inline-block w-32 h-5"><Fallback /></div> : order?.shippingTracking?.address}</p>
                <p><strong className="text-gray-500">Total:</strong> {isLoading ? <div className="inline-block w-32 h-5"><Fallback /></div> : order?.totalPrice?.toLocaleString()} VND</p>
            </div>
        </>
    )

}