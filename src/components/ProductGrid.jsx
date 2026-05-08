// ProductGrid.jsx
// Receives products, loading, and error as props from App.jsx
// Renders the right UI for each state

import ProductCard from './ProductCard'
import Spinner    from './Spinner'

export default function ProductGrid({ products, loading, error, onAddToCart }) {

  // State 1 — still loading
  if (loading) {
    return <Spinner />
  }

  // State 2 — something went wrong
  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-3">⚠️</div>
        <p className="text-gray-500 text-sm">{error}</p>
      </div>
    )
  }

  // State 3 — we have data
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}