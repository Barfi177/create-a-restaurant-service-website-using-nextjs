import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-amber-600 text-white">
      <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sunny Bistro</h1>
        <nav className="space-x-4">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/menu"><a className="hover:underline">Menu</a></Link>
          <Link href="/reservations"><a className="hover:underline">Reservations</a></Link>
          <Link href="/admin"><a className="hover:underline">Admin</a></Link>
        </nav>
      </div>
    </header>
  )
}