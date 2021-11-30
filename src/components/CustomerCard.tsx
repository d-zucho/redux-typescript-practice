import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addFoodItem } from '../features/customerSlice'

interface CustomerCardType {
  id: string
  customerName: string
  food: string[]
}

const CustomerCard = ({ id, customerName, food }: CustomerCardType) => {
  const dispatch = useDispatch()
  const [customerFoodInput, setCustomerFoodInput] = useState('')

  return (
    <div className='customer-food-card-container'>
      <p>{customerName}</p>
      <div className='customer-foods-container'>
        <div className='customer-food'>
          {food.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className='customer-food-input-container'>
          <label htmlFor='add-food-input'>Food Item : &nbsp;</label>
          <input
            id='add-food-input'
            value={customerFoodInput}
            onChange={(e) => {
              setCustomerFoodInput(e.target.value)
            }}
          />
          <button
            onClick={() => {
              dispatch(
                addFoodItem({
                  id,
                  food: customerFoodInput,
                })
              )
              setCustomerFoodInput('')
            }}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
