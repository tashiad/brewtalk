import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
      <form>
        <label className="step" htmlFor="search">Select a brewery:</label>
        <div className="search-bar">
          <img src="https://img.icons8.com/fluent-systems-filled/24/000000/search.png"/>
          <input
            type='text'
            placeholder='Search'
            name='search'
            value={this.state.search}
            onChange={this.handleChange}
          />
        </div>
      </form>
      </>
    )
  }
}

export default Search
