import React from 'react';
// import VideoListCard from './VideoListCard'

const VideoList = ({videoList=[]}) => {
  return (
    <>
    {videoList.map((data,index) => {
      if (data) {
        return (
          <div key={data.name}>
            <h1>{data.name}</h1>
          </div>
        )
      }
      return null
    }) }
    </>
  );
}

export default VideoList;

//     const videoList = videos.map((video) => {
//      return <VideoListCard key={videos.id.videoId} video={video}/>
//     })

//     return(
//       <div className='list list group'>
//         {videoList}
//     </div>
//     )
// }


// export default VideoList