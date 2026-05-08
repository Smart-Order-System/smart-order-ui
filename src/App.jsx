// App.jsx
import { useState, useEffect } from 'react'  // add useEffect here

import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import ProductGrid from './components/ProductGrid'
import OrderForm   from './components/OrderForm'

const API_URL = 'https://fakestoreapi.com/products'

export default function App() {
  const [cartCount, setCartCount] = useState(0)

  // Three state variables for the data fetch lifecycle
  const [products, setProducts] = useState([])     // the actual data
  const [loading, setLoading]   = useState(true)   // are we waiting?
  const [error, setError]       = useState(null)   // did something go wrong?

  // useEffect runs AFTER the component first appears on screen
  // The empty [] means "only run this once, when the page loads"
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(API_URL)

        // Check if the server returned an error status
        if (!response.ok) {
          throw new Error(`Failed to load products (${response.status})`)
        }

        const data = await response.json()
        setProducts(data)

      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.')
      } finally {
        setLoading(false)  // always stop loading, success or fail
      }
    }

    fetchProducts()
  }, [])  // empty array = run once on mount

  function handleAddToCart(product) {
    setCartCount(prev => prev + 1)
    console.log('Added to cart:', product.title)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar cartCount={cartCount} />

      <Hero
        title="Our Products"
        subtitle="Browse our full catalog below"
      />

      {/* Products section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <ProductGrid
          products={products}
          loading={loading}
          error={error}
          onAddToCart={handleAddToCart}
        />
      </div>

      {/* Order form section */}
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