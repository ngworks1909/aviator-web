'use client'
import install1 from "@/assets/install1.svg";
import install2 from "@/assets/install2.svg";
import install3 from "@/assets/install3.svg";
import install4 from "@/assets/install4.svg";


export default function Installation() {
  const steps = [
    {
      number: 1,
      image: `${install1}`,
      title: 'Click on the "settings" button',
      description: "to start installing."
    },
    {
      number: 2,
      image: `${install2}`,
      title: 'Click on Allow to "Allow apps from this',
      description: 'source."'
    },
    {
      number: 3,
      image: `${install3}`,
      title: 'Click on "Ok" to proceed.',
      description: ""
    },
    {
      number: 4,
      image: `${install4}`,
      title: 'Click on "Install" to install.',
      description: ""
    }
  ]

  return (
    <div className="w-full bg-gradient-to-br from-orange-900/40 via-black to-orange-900/40 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          STEPS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">TO INSTALL</span>
        </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="relative bg-gray-900/50 rounded-2xl p-4 backdrop-blur-sm border border-purple-500/20"
            >
              <div className="aspect-square relative mb-4 rounded-xl overflow-hidden bg-black">
                <img
                  src={step.image}
                  alt={`Installation step ${step.number}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-gray-400 mb-2">
                  Step - {step.number}
                </p>
                <p className="text-orange-500 font-medium">
                  {step.title}{' '}
                  {step.description && (
                    <span className="text-white">{step.description}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}