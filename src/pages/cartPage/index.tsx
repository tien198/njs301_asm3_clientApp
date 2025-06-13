import Banner from "../../components/layout/Banner";
import Container from "../../components/UI/Container";
import { getJwt } from "../../ultil/storageUltil/authenTokenUltil";
import { data, Outlet, useLocation } from "react-router";
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

export function loader() {
    const isAuthen = getJwt()
    if (!isAuthen)
        throw data({ message: 'You could not access this resource' }, { status: 401 })
    return null
}

