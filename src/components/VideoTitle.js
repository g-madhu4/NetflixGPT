import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[25%] pl-10 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <h3 className='py-5 w-1/3'>{overview}</h3>
      <div className='flex gap-5'>
        <button className='bg-white text-black p-2 w-24 text-lg rounded-md hover:bg-opacity-80'> ▶️  Play</button>
        <button className='bg-slate-500 text-white p-2 w-28 text-lg bg-opacity-70 rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
