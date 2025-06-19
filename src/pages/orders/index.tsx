import type { IOrder } from "../../interfaces/order";
import type { OrdersLoader } from "./loader";

import { useLoaderData } from "react-router";
import Table from "./comps/table";
import { useEffect, useState } from "react";



export default function Orders() {
    const loader: OrdersLoader = useLoaderData()
    const [orders, setOrders] = useState<IOrder[] | null>(null)

    useEffect(() => {
        loader.orders.then((orders) => {
            if (orders) {
                setOrders(orders)
            }
        })
    }, [loader])


    return <Table orders={orders} />
}