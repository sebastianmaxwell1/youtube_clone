import React from 'react';
import VideoListCard from './VideoListCard'

const VideoList = ({videos, handleVideoSelect}) => {

    const videoList = videos.map((video) => {
     return <VideoListCard key={videos.id.videoId} video={video}/>
    })

    return(
      <div className='list list group'>
        {videoList}
    </div>
    )
}


export default VideoList