export default function isLowercaseUrl(url: string) {
    const lowercaseUrl = url.toLocaleLowerCase()

    if (url !== lowercaseUrl)
        return lowercaseUrl
    return null
}