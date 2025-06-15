import { configureStore } from "@reduxjs/toolkit";
import logoReducer from "./logoSlice";
import modalReducer from "./modalSlice";
import productModalReducer from "./productModalSlice";
import cartReducer from "./cartSlice";
import cartTotalReducer from "./cartTotalSlice";
import livechatReducer from "./livechatSlice";


const store = configureStore({
    reducer: {
        logoState: logoReducer,
        modal: modalReducer,
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