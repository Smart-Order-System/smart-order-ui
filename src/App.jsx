// App.jsx
import { useState } from 'react'   // useState comes from React itself

import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Card      from './components/Card'

const features = [
  { id: 1, icon: '📦', title: 'Browse Products',  description: 'Explore our full catalog.' },
  { id: 2, icon: '🛒', title: 'Place Orders',     description: 'Check out in seconds.'     },
  { id: 3, icon: '🚚', title: 'Track Delivery',   description: 'Follow your order live.'   },
]

export default function App() {
  // useState returns two things:
  // 1. the current value (cartCount)
  // 2. a function to update it (setCartCount)
  const [cartCount, setCartCount] = useState(0)  // 0 is the starting value

  // This function adds one item to the cart
  // We pass it DOWN to Card so Card can trigger it on button click
  function handleAddToCart() {
    setCartCount(cartCount + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Pass cartCount UP to Navbar so it can display the badge */}
      <Navbar cartCount={cartCount} />

      <Hero
        title="Welcome to Smart Order"
        subtitle="Your one-stop shop for retail orders"
      />

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(feature => (
            <Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onAddToCart={handleAddToCart}  // pass the function DOWN to Card
            />
          ))}
        </div>
      </div>

    </div>
  )
}