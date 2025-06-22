"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ParticleScene } from "./ParticleScene"
import { ProductModel } from "./ProductModel"
import { WaitlistForm } from "./WaitlistForm"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particleRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLDivElement>(null)
  const connectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Scene 1: Particle Animation
      ScrollTrigger.create({
        trigger: particleRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          // This will be connected to particle system
          document.documentElement.style.setProperty("--particle-progress", progress.toString())
        },
      })

      // Scene 2: Product Model Scrub
      ScrollTrigger.create({
        trigger: modelRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress
          document.documentElement.style.setProperty("--model-progress", progress.toString())
        },
      })

      // Scene 3: Connectivity Animation
      ScrollTrigger.create({
        trigger: connectRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.to(".pulse-ring", {
            scale: 1 + progress * 2,
            opacity: 1 - progress,
            duration: 0.1,
          })
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Scene 1: Air Quality Visualization */}
      <section
        ref={particleRef}
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <ParticleScene />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            Breathe
            <span className="block font-bold text-cyan-300">Clean</span>
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Advanced HEPA filtration removes 99.97% of particles, transforming your environment from polluted to pure.
          </p>
        </div>
      </section>

      {/* Scene 2: Product Exploded View */}
      <section ref={modelRef} className="min-h-screen flex items-center justify-center bg-white relative">
        <div className="w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[600px]">
            <ProductModel />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900">
              Engineered
              <span className="block font-bold text-blue-600">Perfection</span>
            </h2>
            <div className="space-y-6">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">HEPA H13 Filter</h3>
                <p className="text-gray-600">Medical-grade filtration captures particles as small as 0.1 microns</p>
              </div>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Sensors</h3>
                <p className="text-gray-600">Real-time air quality monitoring with laser particle detection</p>
              </div>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Whisper Quiet</h3>
                <p className="text-gray-600">Advanced motor design operates at just 25dB on sleep mode</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scene 3: Smart Connectivity */}
      <section
        ref={connectRef}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="pulse-ring w-96 h-96 border border-cyan-300 rounded-full"></div>
            <div
              className="pulse-ring w-96 h-96 border border-cyan-300 rounded-full absolute top-0 left-0"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="pulse-ring w-96 h-96 border border-cyan-300 rounded-full absolute top-0 left-0"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light mb-6">
            Smart
            <span className="block font-bold text-cyan-300">Connected</span>
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
            Control your air quality from anywhere. AI-powered automation learns your preferences and optimizes
            performance.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  )
}
