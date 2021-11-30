import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationSlice'
import { v4 as uuid } from 'uuid'

interface ReservationCardTypes {
  customerName: string
  index: number
}

const ReservationCard = ({ customerName, index }: ReservationCardTypes) => {
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index))
        dispatch(
          addCustomer({
            id: uuid(),
            customerName,
            food: [],
          })
        )
      }}
      className='reservation-card-container'>
      {customerName}
      {/* <button onClick={() => dispatch(removeReservation(index))}> x </button> */}
    </div>
  )
}

export default ReservationCard
