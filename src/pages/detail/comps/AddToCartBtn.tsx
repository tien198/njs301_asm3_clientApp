import type IProduct from "../../../interfaces/product";

import useTwoWayBinding from "../../../hooks/useTwoWayBinding";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addItemWithQuantity } from "../../../store/cartSlice";
import { useFetcher } from "react-router";
import { ClientRoutes_absolute as AbsRoute } from "../../../ultil/clientRoutes";
import QuantityInput from "../../../components/UI/QuantityInput";
import DarkButton from "../../../components/UI/DarkButton";

interface Props {
    product: IProduct
}
export default function AddToCartBtn({ product }: Props) {
    const [val, onChangeVal, setVal] = useTwoWayBinding<number>(1)
    const increment = () => setVal(prev => ++prev)
    const decrement = () => setVal(prev => --prev)

    const fetcher = useFetcher();
    const dispatch = useAppDispatch()
    const addToCart = () => {
        dispatch(addItemWithQuantity({ item: product, quantity: val }))
        fetcher.submit(
            { productId: product.id!, quantity: val },
            { method: 'post', action: AbsRoute.Cart, encType: 'application/json' }
        )
    }
    return (
        <div className="flex fade-in">
            <div className="flex gap-4 items-center border border-zinc-950">
                <span className="px-4 py-2 uppercase">Quantity</span>
                <QuantityInput val={val} onChangeVal={onChangeVal} increment={increment} decrement={decrement} />
                <DarkButton onClick={addToCart} className="px-8 py-2 capitalize italic ">Add to cart</DarkButton>
            </div>
        </div>
    );
}
