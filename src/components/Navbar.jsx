// Navbar.jsx
// This component shows the top navigation bar on every page

export default function Navbar() {
    return (
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
  
          {/* App name on the left */}
          <span className="text-lg font-semibold text-gray-900">
            Smart Order
          </span>
  
          {/* Links on the right */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#">Products</a>
            <a href="#">Orders</a>
          </div>
  
        </div>
      </nav>
    )
  }