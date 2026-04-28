// Hero.jsx
// This is the big welcome section at the top of the page
// It receives 'title' and 'subtitle' as props from the parent

export default function Hero({ title, subtitle }) {
    return (
      <div className="text-center py-20 px-4">
  
        {/* title and subtitle come from whoever uses this component */}
        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          {subtitle}
        </p>
  
      </div>
    )
  }