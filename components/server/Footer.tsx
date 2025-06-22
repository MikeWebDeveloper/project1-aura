export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-4">
              Pure
              <span className="font-bold text-cyan-300"> Aura</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming indoor air quality through intelligent design and cutting-edge technology.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <span>© 2025 Aura Technologies</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>

          <div className="text-right">
            <div className="inline-flex items-center gap-4 text-sm text-gray-400">
              <span>Follow the journey</span>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                  <span className="text-xs">tw</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                  <span className="text-xs">ig</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer">
                  <span className="text-xs">li</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
