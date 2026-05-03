// Card.jsx
// Now accepts onAddToCart as a prop — a function to call when button is clicked

export default function Card({ icon, title, description, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm
                    hover:-translate-y-1 hover:shadow-md transition-all duration-200">

      <div className="text-3xl mb-3">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>

      <p className="text-sm text-gray-500 mb-4">{description}</p>

      {/* When clicked, this calls the onAddToCart function from App.jsx */}
      <button
        onClick={onAddToCart}
        className="w-full py-2 bg-blue-600 text-white text-sm font-medium
                   rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add to cart
      </button>

    </div>
  )
}