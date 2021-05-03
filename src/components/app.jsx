import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
//import Comments from './Comments/Comments';
import ReactPlayer from 'react-player';
//import CommentBox from './Comments/Comment.js';


class App extends React.Component {
    state = {
        videos: [], 
        selectedVideo: {},
        isVideoSelected: false
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
        console.log("this is resp",response.data.items);
    };
    handleVideoSelect = (video) => {
        this.setState({
            selectedVideo: video,
            isVideoSelected: true
        })
    }

    buildVideoURL(){
        if (this.state.videos.length === 0){
            return "https://www.youtube.com/watch?v=ug50zmP9I7s";
        }
        else if(this.state.isVideoSelected === true){
            return `https://www.youtube.com/watch?v=${this.state.selectedVideo.id.videoId}`
        }
        else{
            return `https://www.youtube.com/watch?v=${this.state.videos[0].id.videoId}`
        }
    }

    render() {
        console.log("selected video", this.state.selectedVideo);
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                             <div>
                                <ReactPlayer    url={this.buildVideoURL()}/>
                            </div>
                                                  
                            
                            <div className="five wide column">
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            
                            </div> 

                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}        
            
   
                     


export default App;
