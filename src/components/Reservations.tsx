import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReservationForm from '../components/ReservationForm'

export default function Reservations() {
  const onSuccess = () => {
    alert('Thanks! Your reservation is saved locally.')
  }

  return (
    <>
      <Head><title>Reservations — Sunny Bistro</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-3">Make a Reservation</h2>
        <div className="bg-white p-6 rounded shadow">
          <ReservationForm onSuccess={onSuccess} />
        </div>
      </main>
      <Footer />
    </>
  )
}