import { Outlet, useLocation } from "react-router";
import MainNav from "../layout/MainNav";
import Footer from "../layout/Footer";
import LiveChatIcon from "../components/modal/livechatboxModal/LiveChatIcon";
import { ClientRoutes_absolute as Path } from "../ultil/clientRoutes";
import { useEffect, useState } from "react";

/**
 * This function is passed a path need to check and an array of pathNames will apply LiveChat component
 * @param checkingPath - current path need to check
 * @param pathNamesList - array of pathNames will apply LiveChat component
 */
function isHasLiveChat(checkingPath: string, pathNamesList: string[]) {
    for (const i of pathNamesList) {
        if (checkingPath === i)
            return true
    }
    return false
}

export default function Root() {
    const location = useLocation()
    const [hasLiveChat, setHasLiveChat] = useState(false)

    useEffect(() => {
        if (isHasLiveChat(location.pathname, [
            Path.Home,
            Path.Shop,
            Path.Detail,
            Path.Cart,
            Path.Checkout
        ])) {
            setHasLiveChat(true)
        }
        else setHasLiveChat(false)
    }, [location])
    return (
        <>
            <>
                <MainNav />
                <Outlet />
                {hasLiveChat && <LiveChatIcon />}
            </>
            <Footer />
        </>
    );
}
