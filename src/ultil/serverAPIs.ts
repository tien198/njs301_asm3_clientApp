export enum ServerAPI {
    // base = 'https://rjs301asm3backend-production.up.railway.app/',
    base = 'http://localhost:5000/',
    api = base + 'api/',

    products = api + 'shop/products/',
    product = api + 'shop/product/',

    // auth
    signup = api + 'auth/signup/',
    login = api + 'auth/login/'
}   