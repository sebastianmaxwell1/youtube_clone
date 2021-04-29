import React from 'react';
import "video.css";
import YoutubeEmbed from "./CurrentVideo";
import SearchBar


export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="opXobSMUvi4" />
      
    </div>
  );
}

