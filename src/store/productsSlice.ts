import type IProduct from "../interfaces/IProduct";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct[] = []

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addManyProducts(state, action: PayloadAction<IProduct[]>) {
            state = [...state, ...action.payload]
        },
        addOneProduct(state, action: PayloadAction<IProduct>) {
            state = [...state, action.payload]
        }
    }
})

export const { addManyProducts, addOneProduct } = productsSlice.actions
export default productsSlice.reducer