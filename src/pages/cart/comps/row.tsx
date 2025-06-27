import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import QuantityInput from "./QuantityInput"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import type { ICartItem } from "../../../interfaces/cartItem"

type Props = {
    showModal(index: number): void
    removeAction(i: ICartItem): void
    index:number
item: ICartItem
}

export default function Row({index, item,showModal, removeAction}: Props) {
    return (
        <tr key={item.productId}>
            <td onClick={() => showModal(index)} className="hover:cursor-pointer py-4">
                <img src={item.img1} alt={item.name} className="mx-auto md:w-48" />
            </td>
            <td onClick={() => showModal(index)} className="hover:cursor-pointer">
                {item.name}
            </td>
            <td className="hidden md:table-cell text-zinc-500">{item.price?.toLocaleString()} VNĐ</td>
            <td>
                <QuantityInput item={item} />
            </td>
            <td className="text-zinc-500">{item.lineTotal.toLocaleString()} VNĐ</td>
            <td className="hidden md:table-cell">
                <button onClick={() => removeAction(item)}>
                    <FontAwesomeIcon icon={faTrashCan} className="text-zinc-400" />
                </button>
            </td>
        </tr>
    )
}