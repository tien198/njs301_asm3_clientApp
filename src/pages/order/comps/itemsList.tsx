import type { IOrderItem } from "../../../interfaces/order/orderItem";

type Props = {
    items: IOrderItem[]
}

export default function ItemsList({ items }: Props) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-center border-collapse">
                <thead className="bg-gray-100 text-sm uppercase text-gray-500">
                    <tr>
                        <th className="p-3">ID Product</th>
                        <th className="p-3">Image</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, idx) => (
                        <tr key={idx} className="border-t text-sm">
                            <td className="p-3">{item.productId}</td>
                            <td className="p-3">
                                <img src={item.imageUrl} alt={item.name} className="w-64 h-auto mx-auto" />
                            </td>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">{item.priceInOrderTime.toLocaleString()} VND</td>
                            <td className="p-3">{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}