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
      <label htmlFor="search">Select a brewery:</label>
        <input
          type='text'
          placeholder='Search'
          name='search'
          value={this.state.search}
          onChange={this.handleChange}
        />
      </form>
      </>
    )
  }
}

export default Search
