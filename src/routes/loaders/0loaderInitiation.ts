import { redirect, type LoaderFunctionArgs } from "react-router";
import { hideModalDispath } from "../dispaths/hideModalDispath";
import isLowercaseUrl from "./isLowercaseUrl";
import { logoAnimationAcceptDispath } from "../dispaths/logoAnimationAcceptDispath";

export default function loaderInitiation(loaderArgs: LoaderFunctionArgs, logoAnimationAccept = true) {
    hideModalDispath()
    logoAnimationAcceptDispath(logoAnimationAccept)
}