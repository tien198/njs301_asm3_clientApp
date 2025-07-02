import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from ".."

type ModalState = {
    hiddenClass: string
    type: string
}

export type ModalType = 'error' | 'inform' | 'product'

const initialState: ModalState = {
    hiddenClass: 'hidden',
    type: ''
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        show<T extends string = ModalType>(_: ModalState, action: PayloadAction<T>) {
            return {
                type: action.payload, hiddenClass: ''
            }
        },
        hide(state) {
            state.hiddenClass = 'hidden'
        },
        setHideClass(state, action: PayloadAction<string>) {
            if (state.hiddenClass !== 'hidden')
                state.hiddenClass = action.payload
            else
                state.hiddenClass = 'hidden'
        }
    }
})

export const { show, hide, setHideClass } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const hiddenClass = (state: RootState) => state.modal.hiddenClass

export default modalSlice.reducer