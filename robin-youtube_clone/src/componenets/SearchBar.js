import React, {Component} from 'react'

class SearchBar extends Component{

    constructor(props){
    super(props);
    this.state = {
        search: ''
    }
}
    
handleChange = (event) => {
    this.setState({
        search: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearchSubmit(this.state.search)
}

    render() {
        return (
            <div className='Searh'>
                <form onSubmit={this.handleSubmit}>
                    <input id='searchbar' type='text' name='search'
                    placeholder='YouTube Clone Group Project...'
                    value={this.state.search} onChange={this.handleChange}/>
                    <input type='submit' value='search'/>
                </form>
            </div>
    
        )
    }
}

export default SearchBar