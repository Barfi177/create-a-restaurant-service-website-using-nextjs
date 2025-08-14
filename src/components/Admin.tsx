import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getReservations, clearReservations } from '../utils/reservationStorage'

export default function Admin() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    // load from localStorage once client-side
    setReservations(getReservations())
  }, [])

  function refresh() {
    setReservations(getReservations())
  }

  function handleClear() {
    if (!confirm('Clear all local reservations?')) return
    clearReservations()
    setReservations([])
  }

  return (
    <>
      <Head><title>Admin — Reservations</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Reservations (local)</h2>
          <div className="space-x-2">
            <button onClick={refresh} className="border px-3 py-1 rounded">Refresh</button>
            <button onClick={handleClear} className="bg-red-600 text-white px-3 py-1 rounded">Clear all</button>
          </div>
        </div>

        <div className="space-y-3">
          {reservations.length === 0 && <p className="text-gray-600">No reservations yet.</p>}
          {reservations.map(r => (
            <div key={r.id} className="border rounded p-3 bg-white">
              <div className="flex justify-between">
                <div>
                  <strong>{r.name}</strong> — {r.partySize} people
                  <div className="text-sm text-gray-600">{r.email}</div>
                </div>
                <div className="text-sm">
                  {r.date} at {r.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}