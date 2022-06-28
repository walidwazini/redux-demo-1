import { createSlice } from '@reduxjs/toolkit'


const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    text: 'Test',
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    addText(state, action) {
      state.text = action.payload
    },

    toggle(state) {
      // console.log('TOGGLE')
      state.cartIsVisible = !state.cartIsVisible
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    },
    dismissNotification(state) {
      state.notification = null
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice