import CheckoutForm from './comps/chechoutForm';
// css
import classes from '../../layout/conversionActionLayout/CartLayout.module.scss';
import CheckoutTotal from './comps/CheckoutTotal';
import SuccessOrderModal from './comps/SuccessOrderModal';

function Checkout() {
    return (
        <div className={classes['cart-layout']}>
            <SuccessOrderModal />
            <CheckoutForm className={classes['cart']} />
            <CheckoutTotal className={classes['total']} />
            <div className={classes['rest']} />
        </div>
    );
}

export default Checkout;