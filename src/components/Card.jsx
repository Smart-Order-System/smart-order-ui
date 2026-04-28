// Card.jsx
// A reusable card that displays a title, description, and emoji icon
// It can be used many times with different content each time

export default function Card({ icon, title, description, badge }) {
    return (
      <div className="relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">

        {/* Only show the badge if the parent passed one in */}
        {badge && (
          <div className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {badge}
          </div>
        )}
  
        {/* Icon at the top */}
        <div className="text-3xl mb-3">
          {icon}
        </div>
  
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {title}
        </h3>
  
        {/* Description */}
        <p className="text-sm text-gray-500">
          {description}
        </p>
  
      </div>
    )
  }