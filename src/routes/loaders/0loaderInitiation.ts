import { redirect, type LoaderFunctionArgs } from "react-router";
import { hideModalDispath } from "../dispaths/hideModalDispath";
import isLowercaseUrl from "./isLowercaseUrl";
import { logoAnimationAcceptDispath } from "../dispaths/logoAnimationAcceptDispath";

export default function loaderInitiation(args: LoaderFunctionArgs, logoAnimationAccept = true) {
    const lowercaseUrl = isLowercaseUrl(args.request.url)
    if (lowercaseUrl)
        return redirect(lowercaseUrl)
    hideModalDispath()
    logoAnimationAcceptDispath(logoAnimationAccept)
}