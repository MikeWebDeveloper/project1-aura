import { Card } from "@/components/ui/card"
import { BarChart, Cog, Droplets, Gauge, ShieldCheck, Wifi } from "lucide-react"

const features = [
  {
    icon: <Droplets className="w-10 h-10 text-cyan-400" />,
    title: "HEPA H13 Filtration",
    description: "Captures 99.97% of airborne particles down to 0.1 microns, including viruses and bacteria.",
    gridClass: "md:col-span-2",
  },
  {
    icon: <Gauge className="w-10 h-10 text-purple-400" />,
    title: "Real-Time AQI",
    description: "Laser sensors monitor air quality, providing instant feedback via the LED ring.",
    gridClass: "",
  },
  {
    icon: <Cog className="w-10 h-10 text-blue-400" />,
    title: "Whisper-Quiet Motor",
    description: "Operates at a near-silent 25dB, ensuring a peaceful environment.",
    gridClass: "",
  },
  {
    icon: <Wifi className="w-10 h-10 text-green-400" />,
    title: "Smart Connectivity",
    description: "Control and monitor your air from anywhere with the Aura mobile app.",
    gridClass: "",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-400" />,
    title: "UV-C Sterilization",
    description: "An internal UV-C lamp neutralizes germs and pathogens trapped in the filter.",
    gridClass: "",
  },
  {
    icon: <BarChart className="w-10 h-10 text-yellow-400" />,
    title: "AI-Powered Auto Mode",
    description: "Intelligently adjusts fan speed based on your room's air quality and your habits.",
    gridClass: "md:col-span-2",
  },
]

export function FeatureGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900">
            Intelligent by <span className="font-bold text-blue-600">Design</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Every feature is engineered to provide the purest air with maximum efficiency and minimal effort.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card
              key={i}
              className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group ${feature.gridClass}`}
            >
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mb-6 group-hover:bg-cyan-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
