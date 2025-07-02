import type { IProduct } from "../../../interfaces/product";

import useTwoWayBinding from "../../../hooks/useTwoWayBinding";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addItemWithQuantity } from "../../../store/slices/cartSlice";
import { useFetcher } from "react-router";
import { ClientRoutes_absolute as AbsRoute } from "../../../ultil/clientRoutes";
import QuantityInput from "../../../components/UI/QuantityInput";
import DarkButton from "../../../components/UI/DarkButton";
import type { ICartItem } from "../../../interfaces/cartItem";
import { authenChecking } from "../../../ultil/authenChecking";

interface Props {
    product?: IProduct
}
export default function AddToCartBtn({ product }: Props) {
    const [qtyVal, onChangeQtyVal, setQtyVal] = useTwoWayBinding<number>(1)
    const increment = () => setQtyVal(prev => ++prev)
    const decrement = () => setQtyVal(prev => (prev > 1) ? --prev : prev)

    const fetcher = useFetcher();
    const dispatch = useAppDispatch()
    const addToCart = async () => {
        const isAuth = await authenChecking()
        if (!isAuth)
            return

        dispatch(addItemWithQuantity({ item: product as ICartItem, quantity: qtyVal }))
        fetcher.submit(
            { productId: product?.id || '', quantity: qtyVal },
            { method: 'post', action: AbsRoute.Cart, encType: 'application/json' }
        )
    }
    return (
        <div className="flex fade-in">
            <div className="flex gap-4 items-center border border-zinc-950">
                <span className="px-4 py-2 uppercase">Quantity</span>
                <QuantityInput val={qtyVal} onChangeVal={onChangeQtyVal} increment={increment} decrement={decrement} />
                <DarkButton onClick={addToCart} className="px-8 py-2 capitalize italic "
                    disabled={(product?.availableQuantity || 0) < qtyVal}
                >Add to cart</DarkButton>
            </div>
        </div>
    );
}
