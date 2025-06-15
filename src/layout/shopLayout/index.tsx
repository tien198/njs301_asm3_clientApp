import Container from "../../components/UI/Container";
import ProductModal from "../../components/modal/ProductModal";
import useScrollToTopPage from "../../hooks/useScrollToTopPage";
import Banner from "../../pages/home/comps/Banner";
import { Outlet } from "react-router";
import Categories from "./comps/Categories";

export default function ShopRoot() {
    useScrollToTopPage()
    return (
        <Container className="flex flex-col gap-4 mb-12">
            <ProductModal />
            <Banner pageTitle="Shop" />
            <div className="grid md:grid-cols-4 gap-4">
                <Categories className='hidden md:col-start-1 md:col-end-2' />
                <div className='md:col-start-2 md:col-end-5'>
                    <Outlet />
                </div>
            </div>
        </Container>
    );
}
