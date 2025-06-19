import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../interfaces/product";


const initialState: IProduct | null = {}
const productModalSlice = createSlice({
    name: 'product-modal',
    initialState,
    reducers: {
        setProduct(_, action: PayloadAction<IProduct>) {
            return action.payload
        }
    }
})

export const { setProduct } = productModalSlice.actions
export default productModalSlice.reducer