import type { CartLoader } from './loader';

import Table from './comps/Table';
import CartTotal from './comps/CartTotal';
import NavigationAcitons from '../../layout/conversionActionLayout/comps/NavigationActions';

// css
import classes from '../../layout/conversionActionLayout/CartLayout.module.scss';
import { useLoaderData } from 'react-router';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setCart } from '../../store/cartSlice';
import { setTotal } from '../../store/cartTotalSlice';


export default function Cart() {
    const { cart } = useLoaderData<CartLoader>()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (cart) cart.then(i => {
            if (i) {
                dispatch(setCart(i))
                dispatch(setTotal(i))
            }
        })
    }, [cart])
    return (
        <div className={classes['cart-layout']}>
            <Table className={classes['cart']} />
            <CartTotal className={classes['total']} />
            <NavigationAcitons className={classes['rest']} />
        </div>
    );
}