import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FilterSection from './components/FilterSection'
import OutfitModel from './components/OutfitModel'

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', position: 'relative' }}>
        <Hero />
        <FilterSection />
        <OutfitModel />

        {/* Subtle decorative bottom glow */}
        <div style={{ position: 'fixed', bottom: '-50px', left: '0', right: '0', height: '100px', background: 'var(--accent)', filter: 'blur(80px)', opacity: 0.05, zIndex: -1, pointerEvents: 'none' }} />
      </main>
    </>
  )
}

export default App
