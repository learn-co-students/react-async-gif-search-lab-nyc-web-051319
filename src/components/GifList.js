import React from 'react'

export default class GifList extends React.Component {

  renderGifs = () => {
    return this.props.gifs.map(gif => {
      return (
        <li>
          <img src={gif.images.original.url} alt=""/>
        </li>
      )
    })
  }

  render() {
    return (
        <ul>
          {this.renderGifs()}
        </ul>
    )
  }
}
