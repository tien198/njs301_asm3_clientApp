
export enum ClientRoutes {
    Home = '/',
    Shop = 'shop',
    Detail = 'detail',
    Cart = 'cart',
    Checkout = 'checkout',
    Login = 'login',
    Signup = 'signup',
    Logout = 'logout',
}

export enum ClientRoutes_absolute {
    Home = '/',
    Shop = '/' + ClientRoutes.Shop,
    Detail = '/' + ClientRoutes.Detail,
    Cart = '/' + ClientRoutes.Cart,
    Checkout = '/' + ClientRoutes.Checkout,
    Login = '/' + ClientRoutes.Login,
    Signup = '/' + ClientRoutes.Signup,
    Logout = '/' + ClientRoutes.Logout,
}