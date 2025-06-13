
export enum ClientRoutes {
    Home = '/',
    Shop = 'shop',
    Detail = 'detail',
    Cart = 'cart',
    Checkout = 'cartcheckout',
    Login = 'login',
    Signup = 'signup',
    Logout = 'logout',
}

export enum ClientRoutes_absolute {
    Home = '/' + ClientRoutes.Home,
    Shop = '/' + ClientRoutes.Shop,
    Detail = '/' + ClientRoutes.Detail,
    Cart = '/' + ClientRoutes.Cart,
    Checkout = '/' + ClientRoutes.Checkout,
    Login = '/' + ClientRoutes.Login,
    Signup = '/' + ClientRoutes.Signup,
    Logout = '/' + ClientRoutes.Logout,
}