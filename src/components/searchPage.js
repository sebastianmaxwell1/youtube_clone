// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
// import VideoList from './VideoList';

// const SearchPage = (props) => {
//   const [input, setInput] = useState('');
//   const [VideoListDefault, setVideoListDefault] = useState();
//   const [VideoList, setVideoList] = useState();

//   const fetchData = async () => {
//     return await fetch('https://www.youtube.com/watch?v=xi0HRVUsaOw')
//       .then(response => response.json())
//       .then(data => {
//          setVideoList(data) 
//          setVideoListDefault(data)
//        });}

//   const updateInput = async (input) => {
//      const filtered = VideoListDefault.filter(Video => {
//       return Video.name.toLowerCase().includes(input.toLowerCase())
//      })
//      setInput(input);
//      setVideoList(filtered);
//   }

//   useEffect( () => {fetchData()},[]);
	
//   return (
//     <>
//       <h1>Video List</h1>
//       <SearchBar 
//        input={input} 
//        onChange={updateInput}
//       />
//       <VideoList VideoList={VideoList}/>
//     </>
//    );
// }

// export default SearchPage