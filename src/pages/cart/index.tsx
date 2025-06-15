import CartItemsTable from './comps/CartItemsTable';
import CartTotal from './comps/CartTotal';
import NavigationAcitons from '../../layout/conversionActionLayout/comps/NavigationActions';

// css
import classes from '../../layout/conversionActionLayout/CartLayout.module.scss';


export default function Cart() {
    return (
        <div className={classes['cart-layout']}>
            <CartItemsTable className={classes['cart']} />
            <CartTotal className={classes['total']} />
            <NavigationAcitons className={classes['rest']} />
        </div>
    );
}