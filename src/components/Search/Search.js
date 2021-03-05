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
        <div className="searchBar">
          <img className="searchIcon" src="https://img.icons8.com/fluent-systems-filled/24/000000/search.png" alt="Search icon"/>
          <input
            class="searchBox"
            type='search'
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
