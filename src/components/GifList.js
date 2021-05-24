import React from 'react'


export default class GifList extends React.Component {

  // renderGifs(){
  //   this.props.gifs.map(gif => {
  //     return <li><img src={gif.url} /></li>
  //   })
  // }

  render(){
    console.log(this.props.gifs)
    return (
      <ul>
      {this.props.gifs.map(gif => <li><img src={gif.images.original.url}/></li>)}
      </ul>
    )
  }
}
