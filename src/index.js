import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import CurrentVideo from './components/CurrentVideo';
const API_KEY = 'AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA';

//for exmaple

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('react js');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //Same as this.setState({ videos : videos })
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <h5>Youtube Search:</h5><SearchBar onSearchTermChange={videoSearch} />
        <CurrentVideo video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './components/app';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,z
//     document.getElementById('root')
// );


// const myfirstelement = <h1>Hello React!</h1>

// ReactDOM.render(myfirstelement, document.getElementById('root'));