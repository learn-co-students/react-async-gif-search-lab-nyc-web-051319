import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.input)}>
        <label htmlFor="input">Enter Search term: </label>
          <input onChange={(e) => this.handleChange(e)} name="input" value={this.state.input} />
          <input type="submit" value="Find Gifs" />
        </form>
      </div>
    )
  }
}

export default GifSearch;
