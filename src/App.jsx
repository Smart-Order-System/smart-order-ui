// App.jsx
// This is the root component — it assembles all smaller components
// Notice how App.jsx is now clean and easy to read

import Navbar from './components/Navbar'
import Hero   from './components/Hero'
import Card   from './components/Card'

// This is the data we want to show in our cards
// Putting data in an array like this makes it easy to add more later
const features = [
  {
    id: 1,
    icon: '📦',
    title: 'Browse Products',
    description: 'Explore our full catalog of retail products.',
  },
  {
    id: 2,
    icon: '🛒',
    title: 'Place Orders',
    description: 'Add items to your cart and check out in seconds.',
  },
  {
    id: 3,
    icon: '🚚',
    title: 'Track Delivery',
    description: 'Follow your order from warehouse to doorstep.',
  },
  {
    id: 4,
    icon: '🧾',
    title: 'Order History',
    description: 'Review past orders, reorder favorites, and download receipts anytime.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar sits at the very top */}
      <Navbar />

      {/* Hero section with title and subtitle passed as props */}
      <Hero
        title="Welcome to Smart Order"
        subtitle="Your one-stop shop for retail orders"
      />

      {/* Card grid — we loop over the features array to create 3 cards */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {features.map(feature => (
            <Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>
      </div>

    </div>
  )
}