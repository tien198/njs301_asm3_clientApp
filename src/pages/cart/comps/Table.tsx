import type { ICartItem } from "../../../interfaces/cartItem"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import { removeItem, setCurrentItemIndex } from "../../../store/cartSlice"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { show } from "../../../store/modalSlice"
import CartItemModal from "./CartItemModal"
import QuantityInput from "./QuantityInput"
import { useSubmit } from "react-router"
import { ClientRoutes_absolute as AbsRoute } from "../../../ultil/clientRoutes"

interface Props {
    className: string
}
export default function Table({ className }: Props) {
    const cartItems = useAppSelector(({ cart }) => cart.items)

    const submit = useSubmit()
    const dispatch = useAppDispatch()
    const removeAction = (i: ICartItem) => {
        dispatch(removeItem(i.productId || ''))
        submit(null, {
            method: 'delete',
            action: AbsRoute.Cart + '/' + i.productId,
            encType: 'application/json',
            // replace: true,
            // preventScrollReset: true
        })
    }

    function showModal(index: number) {
        dispatch(setCurrentItemIndex(index))
        dispatch(show())
    }

    return (
        <>
            <CartItemModal removeAction={removeAction} />
            <table className={`text-center ${className} `}>
                <thead className="p-4">
                    <tr className=" uppercase bg-zinc-50">
                        <th className="p-4 font-light">Image</th>
                        <th className="font-light">Product</th>
                        <th className="font-light hidden md:table-cell">Price</th>
                        <th className="font-light">Quantity</th>
                        <th className="font-light">Total</th>
                        <th className="font-light hidden md:table-cell">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((i, index) =>
                        <tr key={i.productId}>
                            <td onClick={() => showModal(index)} className="hover:cursor-pointer py-4">
                                <img src={i.img1} alt={i.name} className="mx-auto md:w-48" />
                            </td>
                            <td onClick={() => showModal(index)} className="hover:cursor-pointer">
                                {i.name}
                            </td>
                            <td className="hidden md:table-cell text-zinc-500">{i.price?.toLocaleString()} VNĐ</td>
                            <td>
                                <QuantityInput item={i} />
                            </td>
                            <td className="text-zinc-500">{i.lineTotal.toLocaleString()} VNĐ</td>
                            <td className="hidden md:table-cell">
                                <button onClick={() => removeAction(i)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="text-zinc-400" />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table >
        </>
    )
}