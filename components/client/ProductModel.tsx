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
        className="model-part absolute w-32 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-lg"
        style={{ bottom: "10%", transformStyle: "preserve-3d" }}
      />

      {/* Main Body */}
      <div
        className="model-part absolute w-24 h-48 bg-gradient-to-b from-white to-gray-200 rounded-2xl shadow-xl border border-gray-200/50"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Top Vent */}
      <div
        className="model-part absolute w-20 h-6 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg shadow-inner"
        style={{ top: "15%", transformStyle: "preserve-3d" }}
      />

      {/* Side Vents */}
      <div
        className="model-part absolute w-1 h-32 bg-gray-300 rounded-full"
        style={{ left: "20%", transformStyle: "preserve-3d" }}
      />
      <div
        className="model-part absolute w-1 h-32 bg-gray-300 rounded-full"
        style={{ right: "20%", transformStyle: "preserve-3d" }}
      />

      {/* LED Ring */}
      <div
        className="model-part absolute w-28 h-28 border-4 border-cyan-400/50 rounded-full"
        style={{
          top: "40%",
          transformStyle: "preserve-3d",
          animation: "pulse-faint 4s ease-in-out infinite",
        }}
      />

      {/* Control Panel */}
      <div
        className="model-part absolute w-16 h-12 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center"
        style={{
          bottom: "30%",
          transformStyle: "preserve-3d",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
        }}
      >
        <div
          className="w-2 h-2 bg-cyan-300 rounded-full"
          style={{ animation: "pulse-bright 2s ease-in-out infinite" }}
        />
      </div>
    </div>
  )
}
