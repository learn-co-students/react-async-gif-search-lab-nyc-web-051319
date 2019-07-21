import React from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends React.Component {

  state = {
    search: "",
    gifs: []
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(gifs => {
      this.setState({
        gifs: [gifs.data[0], gifs.data[1], gifs.data[2]]
      })
    })
  }

  render() {
    return (
      <div>
        < GifSearch
        search={this.state.search}
        handleSearch={this.handleSearch} handleChange={this.handleChange}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
