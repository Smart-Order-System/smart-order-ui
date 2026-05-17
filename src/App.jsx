// App.jsx
import { useState, useEffect } from 'react'

import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import ProductGrid from './components/ProductGrid'
import OrderForm   from './components/OrderForm'
import { getProducts } from './api/products'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [products, setProducts]   = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        const message = err.response?.data?.error || err.message
        setError(message || 'Failed to load products. Is your backend running?')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  function handleAddToCart(product) {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />
      <Hero
        title="Our Products"
        subtitle="Browse our full catalog below"
      />
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <ProductGrid
          products={products}
          loading={loading}
          error={error}
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Ready to order?
        </h2>
        <div className="max-w-md">
          <OrderForm />
        </div>
      </div>
    </div>
  )
}