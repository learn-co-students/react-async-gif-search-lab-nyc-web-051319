import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    input: ""
  }

  changeInput = (event) => {
    event.persist()
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.input)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Enter a Search Term</h3>
        <input onChange={this.changeInput} type="text" name="search" value={this.state.input} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
