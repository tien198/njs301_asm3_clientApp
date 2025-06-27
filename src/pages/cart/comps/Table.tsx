import type { ICartItem } from "../../../interfaces/cartItem"

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks"
import { removeItem, setCurrentItemIndex } from "../../../store/slices/cartSlice"
import { show, type ModalType } from "../../../store/slices/modalSlice"
import CartItemModal from "./CartItemModal"
import { useSubmit } from "react-router"
import { ClientRoutes_absolute as AbsRoute } from "../../../ultil/clientRoutes"
import Row from "./row"
import Fallback from "../../../components/UI/Fallback"

interface Props {
    className: string
}
export default function Table({ className }: Props) {
    const cartItems = useAppSelector(state => state.cart.items)

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
        dispatch(show('product' as ModalType))
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
                    {cartItems
                        ? cartItems.map((i, index) =>
                            <Row key={i.productId} item={i} index={index} showModal={showModal} removeAction={removeAction} />
                        )
                        : <Fallback />
                    }
                </tbody>
            </table >
        </>
    )
}