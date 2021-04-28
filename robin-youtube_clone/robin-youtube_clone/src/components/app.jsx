//libraries
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'
import './app.css';

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
            </div>
        );
        }
}
export default Video;