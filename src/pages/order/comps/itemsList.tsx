import Fallback from "../../../components/UI/Fallback";
import type { IOrderItem } from "../../../interfaces/order/orderItem";

type Props = {
    items?: IOrderItem[]
    isLoading?: boolean
}

export default function ItemsList({ items, isLoading = true }: Props) {
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
                    {isLoading
                        ? <tr>
                            <td colSpan={5} className="p-3 h-40">
                                <Fallback className="h-10 w-32 block" />
                            </td>
                        </tr>
                        :

                        items && items.length > 0
                        && items.map((item, idx) => (
                            <tr key={idx} className="border-t text-sm">
                                <td className="p-3">{item.productId}</td>
                                <td className="p-3">
                                    <img src={item.imageUrl} alt={item.name} className="w-64 h-64 mx-auto" />
                                </td>
                                <td className="p-3">{item.name}</td>
                                <td className="p-3">{item.priceInOrderTime.toLocaleString()} VND</td>
                                <td className="p-3">{item.quantity}</td>
                            </tr>
                        ))

                    }
                    {!isLoading && (items!.length === 0) &&
                        <tr>
                            <td colSpan={5} className="p-3 h-40">
                                <p>No items</p>
                            </td>
                        </tr>}
                </tbody>
            </table>
        </div>
    )
}