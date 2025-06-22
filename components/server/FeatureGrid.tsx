import { Card } from "@/components/ui/card"

const features = [
  {
    title: "HEPA H13",
    description: "Medical-grade filtration",
    metric: "99.97%",
    detail: "particle removal",
  },
  {
    title: "Smart Sensors",
    description: "Real-time monitoring",
    metric: "0.1μm",
    detail: "detection precision",
  },
  {
    title: "Whisper Quiet",
    description: "Ultra-silent operation",
    metric: "25dB",
    detail: "sleep mode",
  },
  {
    title: "Energy Efficient",
    description: "Eco-friendly design",
    metric: "12W",
    detail: "power consumption",
  },
  {
    title: "Smart Control",
    description: "App connectivity",
    metric: "WiFi 6",
    detail: "enabled",
  },
  {
    title: "Coverage Area",
    description: "Large room capacity",
    metric: "500 sq ft",
    detail: "effective range",
  },
]

export function FeatureGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Precision
            <span className="block font-bold text-blue-600">Engineering</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every detail designed for optimal performance and seamless integration into your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-0 bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                </div>

                <p className="text-gray-600 text-sm">{feature.description}</p>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{feature.metric}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{feature.detail}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
