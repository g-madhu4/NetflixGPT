import React from 'react';
import useVideoBack from '../hooks/useVideoBack';
import { useSelector } from 'react-redux';

const VideoBack = ({movieID}) => {
   

     useVideoBack(movieID);
    const trailerVideo=useSelector(store=>store.movies?.movieTralier)
     
     

  return (
    <div className='w-screen h-auto'>
       <iframe  src={"https://www.youtube.com/embed/LH1J1EbqCaI?si="+trailerVideo?.key+"?&autoplay=1&mute=1"}  className='w-screen aspect-video'
        title="YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin" >
       </iframe>
    </div>
  )
}

export default VideoBack;


