export default function MenuCard({ item }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{item.name} — ${item.price.toFixed(2)}</h3>
      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
    </div>
  )
}