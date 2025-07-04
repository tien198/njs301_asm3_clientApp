import { Link } from "react-router";
import { ClientRoutes_absolute as Path } from "../../../ultil/clientRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
    className: string
}
export default function NavigationAcitons({ className }: Props) {
    return (
        <div className={`bg-zinc-50 text-zinc-500 italic p-5 flex justify-between ${className}`}>
            <Link to={Path.Shop}>
                <FontAwesomeIcon icon={faArrowLeft} className="text-black mr-4" />
                Continue Shopping
            </Link>
            <Link to={Path.Checkout} className="border border-black px-6 py-2">
                Process to checkout
                <FontAwesomeIcon icon={faArrowRight} className="text-black ml-4" />
            </Link>
        </div>
    );
}
