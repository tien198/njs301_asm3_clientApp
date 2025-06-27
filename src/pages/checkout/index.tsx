import CheckoutForm from './comps/chechoutForm';
// css
import classes from '../../layout/conversionActionLayout/CartLayout.module.scss';
import CheckoutTotal from './comps/CheckoutTotal';
import InformModal from '../../components/modal/InformModal';
import { useNavigate } from 'react-router';
import { ClientRoutes_absolute } from '../../ultil/clientRoutes';

export default function Checkout() {
    const nav = useNavigate()
    return (
        <div className={classes['cart-layout']}>
            <CheckoutForm className={classes['cart']} />
            <CheckoutTotal className={classes['total']} />
            <div className={classes['rest']} />
            
            <InformModal oncloseFnc={() => nav(ClientRoutes_absolute.Orders)}>
                Order Success !
            </InformModal>
        </div>
    );
}
