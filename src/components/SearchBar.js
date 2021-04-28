// import React, {Component} from 'react'
import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search videos"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;



// class SearchBar extends Component{

//     constructor(props){
//     super(props);
//     this.state = {
//         search: ''
//     }
// }
    
// handleChange = (event) => {
//     this.setState({
//         search: event.target.value
//     })
// }

// handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.handleSearchSubmit(this.state.search)
// }

//      render() {
//         return (
//             <div className='Search'>
//                 <form onSubmit={this.handleSubmit}>
//                     <input id='searchbar' type='text' name='search'
//                     placeholder='YouTube Clone Group Project...'
//                     value={this.state.search} onChange={this.handleChange}/>
//                     <input type='submit' value='Search'/>
//                 </form>
//             </div>
//         )}

// }
// export default SearchBar