import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICartState, ItemWithQuantityPayload } from '../storeModels/interfaces/ICartState';
import type { ICartItem } from '../../interfaces/cartItem';
import type { IProduct } from '../../interfaces/product';


const initialState: ICartState = {
    items: [],
    currentItemIndex: 0
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        setCurrentItemIndex: function (state: ICartState, action: PayloadAction<number>) {
            state.currentItemIndex = action.payload
        },

        addItemWithQuantity: function (state: ICartState, action: PayloadAction<ItemWithQuantityPayload>) {
            // updItemsList : updated Items List
            const updItemsList = [...state.items]
            // exIndex : existed Index
            const exIndex = state.items.findIndex(i => i.productId === (action.payload.item as IProduct).id)
            const exItem = updItemsList[exIndex]
            const payload = action.payload

            if (exItem) {
                const newQty = exItem.quantity + payload.quantity

                if (newQty >= 0) {
                    // const updItem = CartItem.create(item, amountQuantity)
                    const updItem: ICartItem = {
                        ...payload.item,
                        productId: (payload.item as IProduct).id!,
                        quantity: newQty,
                        lineTotal: +payload.item.price! * newQty
                    }
                    updItemsList[exIndex] = { ...updItem }
                }
                else {
                    updItemsList.splice(exIndex, 1)
                }
            }
            else if (payload.quantity >= 0) {
                const newItem = {
                    ...payload.item,
                    productId: (payload.item as IProduct).id!,
                    quantity: payload.quantity,
                    lineTotal: +payload.item.price! * payload.quantity
                }
                updItemsList.push(newItem)
            }

            state.items = updItemsList
        },

        /** @param action -  payload is an object {id:string, quantity:number} */
        updateItemQuantity: function (state: ICartState, action: PayloadAction<ItemWithQuantityPayload>) {
            const updItemsList = [...state.items]
            const updIndex = state.items.findIndex(i => i.productId === (action.payload.item as ICartItem).productId)
            const updItem = updItemsList[updIndex]

            if (updItem) {
                const updQuantity = +action.payload.quantity

                if (updQuantity >= 0) {
                    const itemInstance: ICartItem = {
                        ...updItem,
                        quantity: updQuantity,
                        lineTotal: +updItem.price! * updQuantity
                    }
                    updItemsList[updIndex] = { ...itemInstance }
                }
                else
                    updItemsList.splice(updIndex, 1)
            }

            state.items = updItemsList
        },

        /** @param action - payload is productId */
        removeItem: function (state: ICartState, action: PayloadAction<string>) {
            state.items = state.items.filter(i => i.productId !== action.payload)
        },

        clearCart: function (state: ICartState) {
            state.items = []
        },

        setCart: function (state: ICartState, action: PayloadAction<ICartItem[]>) {
            state.items = action.payload
        }
    }
})

export const { setCurrentItemIndex, addItemWithQuantity, updateItemQuantity, removeItem, clearCart, setCart } = cartSlice.actions
export default cartSlice.reducer