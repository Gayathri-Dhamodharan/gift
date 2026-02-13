import React from 'react'
import mainImg from '../assets/images/img.jpeg'

const Suprise = () => {
  return (
    <div className="relative  flex flex-col items-center justify-center mt-5">

      {/* 💖 Main Image */}
      <div className="text-center  bg-black/10">
        <img
          src={mainImg}
          alt="Our Love"
          className="w-screen  rounded-3xl shadow-2xl border-4 border-white "
        />

        
      </div>

      <p className="  text-xl mt-4 p-4 flex flex-col justify-center items-center text-center">
<span className='text-zinc-500'>I may not be great with words, but every bit of this little surprise comes straight from my heart. I hope it brings the sweetest smile to your face, just like you bring to mine every single day.
</span><br/>
<br/>
<span>Happy Valentine’s Day, my dearest. 💖</span>      </p>

    </div>
  )
}

export default Suprise
