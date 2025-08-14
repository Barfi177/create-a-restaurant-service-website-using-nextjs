export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-4xl mx-auto p-6 text-center">
        © {new Date().getFullYear()} Sunny Bistro — 123 Main St, Your City
      </div>
    </footer>
  )
}