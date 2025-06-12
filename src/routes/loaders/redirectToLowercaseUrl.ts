import { redirect } from "react-router"

export default function redirectToLowercaseUrl(url: string) {
    const lowercaseUrl = url.toLocaleLowerCase()

    if (url !== lowercaseUrl)
        return redirect(lowercaseUrl)
}