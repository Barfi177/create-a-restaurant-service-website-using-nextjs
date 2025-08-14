import { useState } from 'react'
import { addReservation } from '../utils/reservationStorage'

export default function ReservationForm({ onSuccess }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [partySize, setPartySize] = useState(2)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function submit(e) {
    e.preventDefault()
    setError(null)
    if (!name || !email || !date || !time || !partySize) {
      setError('Please fill all fields.')
      return
    }
    setLoading(true)
    // simulate async
    setTimeout(() => {
      const entry = addReservation({ name, email, date, time, partySize })
      setName(''); setEmail(''); setDate(''); setTime(''); setPartySize(2)
      setLoading(false)
      onSuccess && onSuccess(entry)
    }, 400)
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="block text-sm">Name</label>
        <input required value={name} onChange={e => setName(e.target.value)} className="w-full border rounded p-2" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded p-2" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm">Date</label>
          <input required type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm">Time</label>
          <input required type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full border rounded p-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm">Party size</label>
        <input required type="number" min="1" value={partySize} onChange={e => setPartySize(Number(e.target.value))} className="w-24 border rounded p-2" />
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button disabled={loading} className="bg-amber-600 text-white px-4 py-2 rounded">
        {loading ? 'Booking...' : 'Book Reservation'}
      </button>
    </form>
  )
}