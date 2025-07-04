import type { HTMLAttributes } from "react";
import type { ICartItem } from "../../../interfaces/cartItem";

import TotalSideLayout from "../../../layout/conversionActionLayout/comps/TotalSideLayout";
import convertToFraction from "../../../ultil/convertToFraction";
import { useAppSelector } from "../../../hooks/reduxHooks";

function Item({ name, price, quantity }: Partial<ICartItem>) {
    return (
        <>
            <div className="flex justify-between">
                <h6 className="first-letter:capitalize lowercase">{name}</h6>
                <span className="text-sm text-zinc-500">{convertToFraction(price)} VND x {quantity}</span>
            </div>
            <hr className="my-2 bg-zinc-500" />
        </>

    )
}


export default function CheckoutTotal({ className }: HTMLAttributes<HTMLDivElement>) {
    const items = useAppSelector(({ cart }) => cart.items)
    const total = useAppSelector(({ cartTotal }) => cartTotal.total)
    return (
        <TotalSideLayout className={className}>
            <h4 className="text-2xl">Your order</h4>
            <div>
                {items.map(i =>
                    <Item name={i.name} price={i.price} quantity={i.quantity} key={i.productId} />
                )}
                <div className="flex justify-between">
                    <span>Total</span>
                    <span>{convertToFraction(total)} VND</span>
                </div>

            </div>
        </TotalSideLayout>
    );
}

