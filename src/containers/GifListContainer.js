import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchGifs = (input = "cat") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      console.log(json.data.slice(0,3))
      this.setState({
        gifs: json.data.slice(0,3)
      })
    })
  }

  componentDidMount(){
    this.fetchGifs()
  }

  render(){
    return (
      <div>
        <GifSearch parentInput={this.state.input} fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
