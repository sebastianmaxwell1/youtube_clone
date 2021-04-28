//libraries
import React from 'react';
// import YTSearch from 'youtube-api-search'
// import VideoList from './VideoList'
// import "video.css";
import YoutubeEmbed from "./CurrentVideo";

//components
// import Searchbar from './SearchBar'

// function App() {
//     return (
//         <div className="App">

//         </div>
//     );
// }

// class Video extends Component {
//     state = {
//         videos: [],
//         currentVideo: null
//     }
    
    // key:'API_KEY' once I have a database
    // handleSubmit = (searchBarSearch) => {
    //     YTSearch({
    //         key: 'AIzaSyAWKp-G5XJ6SJw1rOgvQVMPo4x4ZVsKip8', 
    //         term: searchBarSearch},
    //         (videos) => {
    //             this.setState({
    //                 videos: videos,
    //                 currentVideo: videos[0]
    //             })
    //         })
    //     }


//     render(){
//         return (
//             <div className="App">
//                 <Searchbar handleSearchSubmit={this.handleSubmit}/>
//                 <VideoList videos={this.state.videos} />
//             </div>
//         );
//         }
// }
// export default Video;

// import React from "react";
// import "./styles.css";
// import YoutubeEmbed from "./YoutubeEmbed";

export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="opXobSMUvi4" />
    </div>
  );
}
