import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

  state = {
    gifs: []
  }

  // componentDidMount() {
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=dolphins&api_key=NrYFp8y7jV8ObUhOZreMBpNC3pxu6xb1&limit=3`)
  //   .then(resp => resp.json())
  //   .then(json => {
  //     let jsonGifs = json.data.map(img => img.images.original.url)
  //     console.log(jsonGifs);
  //     this.setState({
  //       gifs: jsonGifs
  //     })
  //   })
  // }

  handleSubmit = (e, query) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=NrYFp8y7jV8ObUhOZreMBpNC3pxu6xb1&limit=3`)
    .then(resp => resp.json())
    .then(json => {
      let jsonGifs = json.data.map(img => img.images.original.url)
      this.setState({
        gifs: jsonGifs
      })
    })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default GifListContainer;
