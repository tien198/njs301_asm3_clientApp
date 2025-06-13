import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type IProduct from "../interfaces/IProduct";



const initialState: IProduct[] = []

const fetchedDetailProductsSlice = createSlice({
    name: 'fetchedDetailProductsSlice',
    initialState,
    reducers: {
        addOneProduct(state, action: PayloadAction<IProduct>) {
            state = [...state, action.payload]
        }
    }
})

export const { addOneProduct } = fetchedDetailProductsSlice.actions
export default fetchedDetailProductsSlice.reducer;