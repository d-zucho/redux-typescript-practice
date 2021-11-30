import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from './app/store'
import CustomerCard from './components/CustomerCard'
import ReservationCard from './components/ReservationCard'
import { addReservation } from './features/reservationSlice'

function App() {
  const [reservationNameInput, setReservationNameInput] = useState('')

  const [foodInput, setFoodInput] = useState('')

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  )

  const customers = useSelector(
    (state: RootState) => state.customer.value
    // h
  )

  const dispatch = useDispatch()

  const handleAddReservation = () => {
    if (!reservationNameInput) return

    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  return (
    <div className='App'>
      <div className='container'>
        {/* -- START Reservation Area -- */}
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((customerName, index) => (
                <ReservationCard index={index} customerName={customerName} />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <label htmlFor='add-reservation'>
              Enter Party Name:
              <input
                id='add-reservation'
                value={reservationNameInput}
                onChange={(e) => setReservationNameInput(e.target.value)}
              />
            </label>
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        {/* -- END Reservation Area  */}

        {/* -- START Customer Card Area -- */}
        <div className='customer-food-container'>
          {customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              customerName={customer.customerName}
              food={customer.food}
            />
          ))}
        </div>
        {/* -- END Customer Card Area -- */}
      </div>
    </div>
  )
}

export default App
