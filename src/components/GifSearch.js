import React from 'react'

export default class GifSearch extends React.Component {


  render() {
    return (
      <div className="gif-search">
        <form onSubmit={this.props.handleSearch}>
          <input type="text" value={this.props.search} onChange={this.props.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
