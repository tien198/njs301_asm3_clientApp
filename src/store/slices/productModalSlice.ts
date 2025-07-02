import type { IProduct } from "../../interfaces/product";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


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