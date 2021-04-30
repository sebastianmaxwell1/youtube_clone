import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ReactPlayer from 'react-player'
//import Comments from './Comments/Comments';

class App extends React.Component {
    state = {
        videos: [], 
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                             <div>
                            <ReactPlayer    url="https://www.youtube.com/watch?v=ug50zmP9I7s"/>
                                         </div>
                                                  
                        </div>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                           
                    </div>
                </div>
            </div>
        )
    }
}        
            
   
                     
// export default function Embed() {
//     return (
//       <div className="Embed">
//         <h1>Youtube Embed</h1>
//         <YoutubeEmbed embedId="opXobSMUvi4" />
//       </div>
//     );
//   }

export default App;
