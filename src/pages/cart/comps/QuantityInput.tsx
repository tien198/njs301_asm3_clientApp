import type { ChangeEvent } from "react"
import type { ICartItem } from "../../../interfaces/cartItem"

import { useAppDispatch } from "../../../hooks/reduxHooks"
import { updateItemQuantity } from "../../../store/cartSlice"
import QuantityInput from "../../../components/UI/QuantityInput";

interface Props {
    item: ICartItem
}
export default function CartItemQuantityInput({ item }: Props) {
    const dispatch = useAppDispatch()
    const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateItemQuantity({ item: item, quantity: +e.target.value }))
    }
    const increment = () => dispatch(updateItemQuantity({ item: item, quantity: +item.quantity + 1 }))
    const decrement = () => dispatch(updateItemQuantity({ item: item, quantity: +item.quantity - 1 }))

    return (
        <QuantityInput val={item.quantity} onChangeVal={onChangeQuantity} increment={increment} decrement={decrement} />
    )
}
