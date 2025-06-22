"use client"

import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { Group, Mesh } from "three"

function AirPurifierModel() {
  const group = useRef<Group>(null)
  const { scene } = useGLTF("/air_purifier.glb")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const modelProgress = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--model-progress") || "0"
      )
      setProgress(modelProgress)
    }

    // Initial update
    updateProgress()

    // Listen for changes to the CSS custom property
    const observer = new MutationObserver(updateProgress)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!group.current) return

    // Animate the entire model rotation and scale based on progress
    group.current.rotation.y = progress * Math.PI * 2
    group.current.scale.setScalar(0.8 + progress * 0.4)

    // Create exploded view effect by moving parts apart
    const children = group.current.children
    children.forEach((child, index) => {
      if (child instanceof Group || child instanceof Mesh) {
        const explosionFactor = progress * 2
        const angle = (index / children.length) * Math.PI * 2
        
        // Move parts outward in a radial pattern
        child.position.x = Math.cos(angle) * explosionFactor
        child.position.y = Math.sin(angle * 0.5) * explosionFactor
        child.position.z = Math.sin(angle) * explosionFactor
        
        // Rotate individual parts
        child.rotation.x = progress * Math.PI * 0.5
        child.rotation.z = progress * Math.PI * 0.3
      }
    })
  }, [progress])

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export function ProductModel() {
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Environment for realistic reflections */}
        <Environment preset="studio" />
        
        {/* The 3D Model */}
        <AirPurifierModel />
        
        {/* Optional: Allow user to rotate the model manually */}
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          rotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Loading fallback */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-50 pointer-events-none">
        <div className="text-gray-600">Loading 3D Model...</div>
      </div>
    </div>
  )
}

// Preload the model for better performance
useGLTF.preload("/air_purifier.glb")
