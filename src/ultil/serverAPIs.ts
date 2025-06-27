export enum ServerAPI {
    base = 'http://localhost:5000/',
    // base = 'https://njs301asm3server-production.up.railway.app/',
    api = base + 'api/',

    products = api + 'shop/products/',
    product = api + 'shop/product/',
    findByCategory = api + 'shop/find-by-category/',

    cart = api + 'shop/cart',

    createOrder = api + 'shop/create-order',
    getOrders = api + 'shop/orders',
    getOrderById = api + 'shop/order',

    // auth
    signup = api + 'auth/signup/',
    login = api + 'auth/login/',
    authenState = api + 'auth/status/'
}   