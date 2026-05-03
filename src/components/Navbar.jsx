// Navbar.jsx
// Now accepts cartCount as a prop so it can show the badge

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">

        <span className="text-lg font-semibold text-gray-900">
          Smart Order
        </span>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#">Products</a>
          <a href="#">Orders</a>

          {/* Cart icon with badge — only shows the number if cartCount > 0 */}
          <div className="relative">
            <span>🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white
                               text-xs rounded-full w-4 h-4 flex items-center
                               justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>

      </div>
    </nav>
  )
}