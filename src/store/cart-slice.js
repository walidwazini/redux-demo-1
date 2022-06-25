import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(itemCart => newItem.id === itemCart.id)
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      }
      else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemToCart(state, action) {
      const idToRemove = action.payload
      const existingItem = state.items.find(item => item.id === idToRemove)
      state.totalQuantity--

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== idToRemove)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice