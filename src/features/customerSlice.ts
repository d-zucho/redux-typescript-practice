import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CustomerFoodState {
  value: Customer[]
}

interface addFoodToCustomerPayload {
  food: string
  id: string
}

interface Customer {
  id: string
  customerName: string
  food: string[]
}

const initialState: CustomerFoodState = {
  value: [],
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },

    addFoodItem: (state, action: PayloadAction<addFoodToCustomerPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food)
        }
      })
    },
  },
})

export const { addCustomer, addFoodItem } = customerSlice.actions

export default customerSlice.reducer
