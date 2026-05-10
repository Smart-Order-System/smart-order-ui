// ProductCard.jsx
// Displays one product from the FakeStore API
// Receives a product object as a prop

export default function ProductCard({ product, onAddToCart }) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm
                      hover:-translate-y-1 hover:shadow-md transition-all duration-200
                      flex flex-col">
  
        {/* Product image */}
        <div className="p-6 flex items-center justify-center h-48 bg-gray-50 rounded-t-xl">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>
  
        {/* Product details */}
        <div className="p-4 flex flex-col flex-1">
  
          {/* Category badge */}
          <span className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">
            {product.category}
          </span>
  
          {/* Title — truncated to 2 lines */}
          <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 flex-1">
            {product.title}
          </h3>
  
          {/* Price + primary action */}
          <div className="mt-auto pt-3 border-t border-gray-100">
            <span className="text-lg font-bold text-gray-900 block mb-3">
              ${product.price.toFixed(2)}
            </span>
            <button
              type="button"
              onClick={() => onAddToCart?.(product)}
              className="w-full px-3 py-2.5 bg-blue-600 text-white text-sm font-medium
                         rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              Add to cart
            </button>
          </div>
  
        </div>
      </div>
    )
  }