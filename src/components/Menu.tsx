import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuCard from '../components/MenuCard'
import { menuData } from '../lib/menu'

export default function Menu() {
  return (
    <>
      <Head><title>Menu — Sunny Bistro</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {menuData.map(item => <MenuCard key={item.id} item={item} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}