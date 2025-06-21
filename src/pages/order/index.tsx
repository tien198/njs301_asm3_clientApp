import type { OrderLoader } from "./loader";
import ItemsList from "./comps/itemsList";
import OrderInfor from "./comps/orderInfor";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import type { IOrder } from "../../interfaces/order";
import OrderModel from "../../models/order";

export default function Order() {
    const loader = useLoaderData<OrderLoader>()
    const [order, setOrder] = useState<Partial<IOrder> | null>(new OrderModel() as IOrder)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        loader.order.then(order => {
            if (order) {
                setOrder(order)
            }
            setIsLoading(false)
        })
    }, [loader])

    return (
        <div className="p-6 bg-white text-gray-800">

            <OrderInfor order={order} isLoading={isLoading} />
            <ItemsList items={order?.items} isLoading={isLoading} />
        </div>
    )
}