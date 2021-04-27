import React, { Component } from 'react';
// import TitleBar from './TitleBar/titleBar';
import YTSearch from 'youtube-api-search'
import Searchbar from './components/SearchBar'
import './App.css';

class App extends Component {
    state = {
        videos: [],
        currentVideo: null
    }
    
    handleSubmit = (searchBarSearch) => {
        YTSearch({
            key: API_KEY,
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
                <h1>hello</h1>
                <Searchbar handleSearchSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
export default App;