let reservations = []
let idCounter = 1

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(reservations)
  } else if (req.method === 'POST') {
    const { name, email, date, time, partySize } = req.body || {}
    if (!name || !email || !date || !time || !partySize) {
      return res.status(400).json({ error: 'Missing fields' })
    }
    const newRes = { id: idCounter++, name, email, date, time, partySize }
    reservations.push(newRes)
    // NOTE: This is ephemeral. Use a persistent DB for production.
    res.status(201).json(newRes)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}