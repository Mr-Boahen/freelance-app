import React from 'react'

function JoinBanner() {
  return (
    <div className='my-10 mx-auto w-[75%] font-splinesans'>
      <div className='w-[100%] h-[300px] p-10  bg-gradient-to-r from-[#0a0725] from-80% to-blue-950 text-white mx-auto'>
        <p className='text-5xl font-[600] font-signika'>Suddenly it's all so <span>doable</span></p>
        <button className='my-10 text-blue-400 border rounded-lg px-10 py-5 text-3xl  font-mono hover:animate-none hover:bg-white hover:text-black transition-all ease-in-out duration-200'>Join Fiverr</button>
      </div>
    </div>
  )
}

export default JoinBanner
