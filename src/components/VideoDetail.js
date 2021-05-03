import React from "react";

const VideoDetail = ({video}) => {
  if (!video) {
      return <div>Put Comments Here</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  // console.log(typeof video)
  return (
      <div>
          <div className='ui embed'>
              <iframe src={videoSrc} allowFullScreen title='YouTube Clone Video player'/>
          </div>
          <div className='ui segment'>
              <h4 className='ui header'>{video.snippet.title}</h4>
              <p>{video.snippet.description}</p>
          </div>
          
      </div>
  )
}

export default VideoDetail;












/* const VideoDetail = ({video, handleVideoSelect}) => {
    return (
         <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
        <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
         className='content'
        </div>

    )

    }   
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
    return (
      <div>
        <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
*/ 