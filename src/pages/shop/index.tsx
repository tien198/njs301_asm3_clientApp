import Container from "../../components/UI/Container";
import ProductModal from "../../components/modal/ProductModal";
import CategoriesDashboard from "./comps/CategoriesDashboard";
import useScrollToTopPage from "../../hooks/useScrollToTopPage";
import Banner from "../../layout/home/Banner";
import { Outlet } from "react-router";

export default function ShopRoot() {
    useScrollToTopPage()
    return (
        <Container className="flex flex-col gap-4 mb-12">
            <ProductModal />
            <Banner pageTitle="Shop" />
            <CategoriesDashboard>
                <Outlet />  {/* ------------ Outlet in here */}
            </CategoriesDashboard>
        </Container>
    );
}
