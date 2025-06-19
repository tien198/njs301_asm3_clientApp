import type { IOrder } from "../../../interfaces/order";

import Row from "./row";


type Props = { orders: IOrder[] | null }

export default function Table({ orders }: Props) {

    return (
        <div className="p-6 bg-gray-50">
            <h2 className="text-3xl font-light italic mb-4">HISTORY</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100 text-left">
                        <tr className="text-sm text-gray-600 uppercase tracking-wide">
                            <th className="p-3">ID Order</th>
                            <th className="p-3">ID User</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Address</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Delivery</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders
                                ? orders.map((order, index) => (
                                    <Row key={index} order={order} isGray={index % 2 !== 0} />
                                ))
                                : <tr>
                                    <td colSpan={10} className="text-center">Loading...</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}