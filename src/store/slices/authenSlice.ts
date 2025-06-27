import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "../../interfaces/user";

const initialState: Partial<IUser> = {}

const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        setAuthen(_, action: PayloadAction<Partial<IUser>>) {
            return action.payload
        },
        resetAuthen() {
            return initialState
        }
    }
})


export const { setAuthen, resetAuthen } = authenSlice.actions
export default authenSlice.reducer
