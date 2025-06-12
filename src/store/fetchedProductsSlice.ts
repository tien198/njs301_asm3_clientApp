import type { IProduct } from "../interfaces/IProduct";
import type IProductsListState from "./storeModels/interfaces/IProductsListState";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: IProductsListState = {
    products: []
}
const fetchedProductsSlice = createSlice({
    name: 'fetched-products',
    initialState,
    reducers: {
        addManyProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = [...state.products, ...action.payload]
        },
        addOneProduct(state, action: PayloadAction<IProduct>) {
            state.products = [...state.products, action.payload]
        }
    }
})

export const { addManyProducts, addOneProduct } = fetchedProductsSlice.actions
export default fetchedProductsSlice.reducer