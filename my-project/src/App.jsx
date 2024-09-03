import React from 'react'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import WhereToBuy from './Components/WhereToBuy/WhereToBuy'
import AppBanner from './Components/AppBanner/AppBanner'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
    </div>
  )
}

export default App
