import { useState } from 'react';

const Charecters = () => {
  //track which avatar is selected
  const [selectedAvtar, setSelectedAvtar] = useState("VIKI"); 

  //simplified avatar data
  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars:3,
    },
    EVA : {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      stars:4,
    },
  }

  //Get current Avatar data 
  const currentAvtar = Avatar[selectedAvtar];

  return (
    <div className='realtive w-full h-screen overflow-hidden mb-[10%]'>

      {/* section title */}

      <div className='relative z-10 pt-6 text-center'>
        <h1 className='text-5xl font-bold tracking-widest md:-mb-14 mb-8'
          style={{ textShadow: "0 0 10px rgba (255, 255, 255, 0.7)" }}>
          FIGHTERS
        </h1>
      </div>

      {/* main content Area */}

      <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>

        {/* left side -Avtar info and selection */}

        <div className='w-full md:w-2/4 flex flex-col md:ml-10'>

          {/**selected awatar info card */}
          <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800
            shadow-[0_0_15px_rgba(167, 139, 250,0.2)]'>
              <h1 className='text-2xl font-semibold mb-2'>{currentAvtar.name}</h1>

            {/**avtar statistics */}

            <div className='space-y-3 mb-16'>

              {/** power stat */}

              <div className='flex items-center '>
                <span className='w-24 text-gray-400'> Power </span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                    style={{ width: `${currentAvtar.power}%` }}>
                     
                  </div>
                </div>
                <span className='ml-2'>{currentAvtar.power}</span>
              </div>

              {/** stable stat */}

              <div className='flex items-center '>
                <span className='w-24 text-gray-400'> Stable </span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                   style={{ width: `${currentAvtar.stable}%` }}>

                  </div>
                </div>
                <span className='ml-2'>{currentAvtar.stable}</span>
              </div>

              {/** Penetrate stat */}

              <div className='flex items-center '>
                <span className='w-24 text-gray-400'> Penetrate </span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                   style={{ width: `${currentAvtar.penetrate}%` }}>

                  </div>
                </div>
                <span className='ml-2'>{currentAvtar.penetrate}</span>
              </div>

              {/** Portable stat */}

              <div className='flex items-center '>
                <span className='w-24 text-gray-400'> Portable </span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white'
                   style={{ width: `${currentAvtar.portable}%` }}>

                  </div>
                </div>
                <span className='ml-2'>{currentAvtar.portable}</span>
              </div>
              </div>

              {/**Action button */}
              <div className='flex gap-3'>
                <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold
                hover:opacity-70 transition-all duration-300'>
                  Profitient
                </button>

                <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold
                hover:opacity-70 transition-all duration-300'>
                  Redemption
                </button>
            </div>
          </div>

          {/**Avatar selection Cards */}

          
        </div>
      </div>
    </div>
  )
}

export default Charecters