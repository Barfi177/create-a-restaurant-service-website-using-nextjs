export default function handler(req, res) {
  const menu = [
    { id: 1, name: 'Margherita Pizza', price: 12.5, description: 'Tomato, mozzarella, basil' },
    { id: 2, name: 'Grilled Salmon', price: 18.0, description: 'Served with roasted vegetables' },
    { id: 3, name: 'Caesar Salad', price: 9.5, description: 'Romaine, parmesan, croutons' },
    { id: 4, name: 'Chocolate Lava Cake', price: 7.0, description: 'Warm, with vanilla ice cream' },
  ]
  res.status(200).json(menu)
}