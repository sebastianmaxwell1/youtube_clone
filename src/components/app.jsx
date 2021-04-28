//libraries
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import './app.css';
import VideoList from './VideoList'

//components
import Searchbar from './SearchBar'

// function App() {
//     return (
//         <div className="App">

//         </div>
//     );
// }

class Video extends Component {
    state = {
        videos: [],
        currentVideo: null
    }
    
    // key:'API_KEY' once I have a database
    handleSubmit = (searchBarSearch) => {
        YTSearch({
            key: '', 
            term: searchBarSearch},
            (videos) => {
                this.setState({
                    videos: videos,
                    currentVideo: videos[0]
                })
            })
        }

    render(){
        return (
            <div className="App">
                <Searchbar handleSearchSubmit={this.handleSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
        }
}
export default Video;