import Banner from "../../pages/home/comps/Banner";
import Container from "../../components/UI/Container";
import { Outlet, useLocation } from "react-router";
import { ClientRoutes_absolute as AsbRoute } from "../../ultil/clientRoutes";


export default function CartIndex() {
    const location = useLocation()
    // true if /cart - false if /cart/checkout
    const pageTitle = location.pathname

    return (
        <Container className="italic">
            <Banner pageTitle={pageTitle} pageUrl={`Home${location.pathname}`} />
            <h1 className="uppercase text-2xl mt-14">
                {pageTitle === AsbRoute.Cart && 'Shopping Cart'}
                {pageTitle === AsbRoute.Checkout && 'Billing Detail'}
            </h1>
            <div className="my-4">
                <Outlet />  {/* ------------ Outlet in here */}
            </div>
        </Container>
    );
}



