// OrderForm.jsx — updated to post to real Spring Boot backend
import { useState } from 'react'
import { placeOrder } from '../api/orders'

export default function OrderForm() {
  const [name, setName]         = useState('')
  const [address, setAddress]   = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)
  const [orderId, setOrderId]   = useState(null)

  async function handleSubmit() {
    if (!name || !address) {
      alert('Please fill in all fields')
      return
    }

    try {
      setLoading(true)
      setError(null)

      // Build the order object your backend expects
      const orderData = {
        userId: 'guest-user',
        items: [],               // we will wire this to the cart in Milestone 6
        shippingAddress: {
          street: address,
          city: '',
          state: '',
          zip: '',
        },
      }

      const result = await placeOrder(orderData)
      setOrderId(result.id)
      setSubmitted(true)

    } catch (err) {
      const message = err.response?.data?.error || err.message
      setError(message || 'Failed to place order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">✅</div>
        <h3 className="text-lg font-semibold text-green-800">Order placed!</h3>
        <p className="text-sm text-green-600 mt-1">Order ID: {orderId}</p>
        <p className="text-sm text-green-600">
          Thanks {name}, we will deliver to: {address}
        </p>
        <button
          onClick={() => { setName(''); setAddress(''); setSubmitted(false) }}
          className="mt-4 text-sm text-green-700 underline"
        >
          Place another order
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Place an Order</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">Full name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="John Smith"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">Delivery address</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="123 Main St, Atlanta, GA"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-2 bg-blue-600 text-white text-sm font-medium
                   rounded-lg hover:bg-blue-700 transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Placing order...' : 'Submit order'}
      </button>
    </div>
  )
}