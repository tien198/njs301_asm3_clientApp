import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type ErrorRes from "../models/errorResponse";
import type { IRes } from "../interfaces/response";

const initialState: ErrorRes = {
    statusText: '', status: 0, data: {}
}

const responseModalSlice = createSlice({
    name: 'response-modal',
    initialState,
    reducers: {
        setResponse(_, action: PayloadAction<IRes>) {
            return action.payload
        },
        resetResponse() {
            return initialState;
        }
    }
})

export const { setResponse, resetResponse } = responseModalSlice.actions;
export default responseModalSlice.reducer;