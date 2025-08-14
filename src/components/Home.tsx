import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import ReservationForm from '../components/ReservationForm'

export default function Home() {
  return (
    <>
      <Head><title>Sunny Bistro</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold">Welcome to Sunny Bistro</h2>
            <p className="mt-3 text-gray-700">Farm-fresh ingredients, cozy atmosphere, and delicious dishes. Book a table or check our menu.</p>
            <div className="mt-4 space-x-2">
              <Link href="/menu"><a className="bg-gray-800 text-white px-4 py-2 rounded">View Menu</a></Link>
              <Link href="/reservations"><a className="border px-4 py-2 rounded">Reservations</a></Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Quick Reservation</h3>
              <ReservationForm onSuccess={() => alert('Reservation saved locally!')} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}