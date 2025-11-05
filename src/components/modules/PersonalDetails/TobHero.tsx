import React from 'react'

const TobHero = () => {
  return (
    <div className="relative h-[232px] rounded-3xl  w-full overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover object-top" autoPlay loop muted playsInline  >
        <source src="/AdobeStock_441987319_Video_HD_Preview.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default TobHero
