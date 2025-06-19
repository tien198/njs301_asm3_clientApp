import { Link } from "react-router";
import type { IOrder } from "../../../interfaces/order";
import { ClientRoutes_absolute as AbsRoute } from "../../../ultil/clientRoutes";

type Props = {
    order: IOrder
    isGray?: boolean
}

export default function Row({ order, isGray = false }: Props) {
    return (
        <tr className={` ${isGray ? "bg-gray-100" : ""}text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-200 transition`}>
            <td className="p-3">{order.id}</td>
            <td className="p-3">{order.userId}</td>
            <td className="p-3">{order.userName}</td>
            <td className="p-3">{order.shippingTracking.phone}</td>
            <td className="p-3">{order.shippingTracking.address}</td>
            <td className="p-3">{order.totalPrice.toLocaleString()} VNĐ</td>
            <td className="p-3 text-red-500">{order.shippingTracking.status}</td>
            <td className="p-3 text-red-500">{order.status}</td>
            <td className="p-3">
                <Link to={AbsRoute.Order + '/' + order.id} className=" block px-4 py-1 border border-black hover:bg-black hover:text-white transition">
                    View →
                </Link>
            </td>
        </tr>
    )
}