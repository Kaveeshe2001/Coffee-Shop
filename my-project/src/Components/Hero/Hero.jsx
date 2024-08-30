import React from 'react';
import BgImage from "../../assets/bg-image.png";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const Hero = () => {
  return (
    <main style={bgImage}>
        <section className='min-h-[750px] w-full'>
            <div className='container'>
                {/* Navbar Section */}
                {/* Hero Section */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  {/* text content section */}
                  <div className='text-lightOrange'>
                    <h1 className='text-7xl font-bold leading-tight ml-14'>Blvck Tumbler</h1>
                  </div>
                  {/* hero image section */}
                  {/* third div section */}
                </div>
            </div>
        </section>
    </main>
  )
}

export default Hero
