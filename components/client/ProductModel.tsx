"use client"

import { useEffect, useRef } from "react"

export function ProductModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This would normally integrate with React Three Fiber
    // For now, we'll create a CSS-based 3D effect that responds to scroll
    const updateModel = () => {
      const progress = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--model-progress") || "0",
      )

      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".model-part")
        elements.forEach((el, index) => {
          const element = el as HTMLElement
          const delay = index * 0.1
          const partProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)))

          element.style.transform = `
            translateZ(${partProgress * 100}px) 
            rotateY(${partProgress * 360}deg)
            scale(${1 + partProgress * 0.2})
          `
          element.style.opacity = (1 - partProgress * 0.3).toString()
        })
      }
    }

    const observer = new MutationObserver(updateModel)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    })

    // Initial update
    updateModel()

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      {/* Base */}
      <div
        className="model-part absolute w-32 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-lg"
        style={{ bottom: "10%", transformStyle: "preserve-3d" }}
      />

      {/* Main Body */}
      <div
        className="model-part absolute w-24 h-48 bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-xl border border-gray-200"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Top Vent */}
      <div
        className="model-part absolute w-20 h-6 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg"
        style={{ top: "15%", transformStyle: "preserve-3d" }}
      />

      {/* Side Vents */}
      <div
        className="model-part absolute w-2 h-32 bg-gradient-to-b from-gray-700 to-gray-500 rounded-full"
        style={{ left: "20%", transformStyle: "preserve-3d" }}
      />
      <div
        className="model-part absolute w-2 h-32 bg-gradient-to-b from-gray-700 to-gray-500 rounded-full"
        style={{ right: "20%", transformStyle: "preserve-3d" }}
      />

      {/* LED Ring */}
      <div
        className="model-part absolute w-28 h-28 border-4 border-cyan-400 rounded-full animate-pulse"
        style={{ top: "40%", transformStyle: "preserve-3d" }}
      />

      {/* Control Panel */}
      <div
        className="model-part absolute w-16 h-12 bg-black rounded-lg flex items-center justify-center"
        style={{ bottom: "30%", transformStyle: "preserve-3d" }}
      >
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      </div>
    </div>
  )
}
