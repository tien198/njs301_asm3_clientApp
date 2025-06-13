import Banner from "../../layout/home/Banner";
import Container from "../../components/UI/Container";
import { Outlet, useLocation } from "react-router";
import { ClientRoutes } from "../../ultil/clientRoutes";


export default function CartIndex() {
    const location = useLocation()
    // true if /cart - false if /cart/checkout
    const isCartPage = location.pathname === ClientRoutes.Cart

    return (
        <Container className="italic">
            <Banner pageTitle={isCartPage ? 'Cart' : 'Checkout'} pageUrl={`Home${location.pathname}`} />
            <h1 className="uppercase text-2xl mt-14">
                {isCartPage
                    ? 'Shopping Cart'
                    : 'Billing Detail'}
            </h1>
            <div className="my-4">
                <Outlet />  {/* ------------ Outlet in here */}
            </div>
        </Container>
    );
}



