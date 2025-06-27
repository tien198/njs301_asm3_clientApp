import { configureStore } from "@reduxjs/toolkit";
import logoReducer from "./slices/logoSlice";
import authenReducer from "./slices/authenSlice";
import modalReducer from "./slices/modalSlice";
import responseReducer from "./slices/responseModalSlice";
import productModalReducer from "./slices/productModalSlice";
import cartReducer from "./slices/cartSlice";
import cartTotalReducer from "./slices/cartTotalSlice";
import livechatReducer from "./slices/livechatSlice";


const store = configureStore({
    reducer: {
        logoState: logoReducer,
        authen: authenReducer,
        modal: modalReducer,
        response: responseReducer,
        productModal: productModalReducer,
        cart: cartReducer,
        cartTotal: cartTotalReducer,
        livechat: livechatReducer
    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch