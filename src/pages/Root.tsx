import { Outlet, useLocation } from "react-router";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import LiveChatIcon from "../components/UI/LiveChatIcon";
import { ClientRoutes } from "../ultil/clientRoutes";
import { useEffect, useState } from "react";

/**
 * This function is passed a path need to check and an array of pathNames will apply LiveChat component
 * @param checkingPath - current path need to check
 * @param pathNamesList - array of pathNames will apply LiveChat component
 */
function isHasLiveChat(checkingPath: string, pathNamesList: string[]) {
    for (let i of pathNamesList) {
        if (checkingPath.includes(i))
            return true
    }
    return false
}

function Root() {
    const location = useLocation()
    const [hasLiveChat, setHasLiveChat] = useState(false)

    useEffect(() => {
        if (location.pathname === ClientRoutes.Home
            || isHasLiveChat(location.pathname, [ClientRoutes.Shop, ClientRoutes.Detail, ClientRoutes.Cart])) {
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

export default Root;