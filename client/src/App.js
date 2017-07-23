import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = { res: '' }

  componentDidMount() {
    this.getPage()
  }

  getPage = () => {
    fetch('/api/page')
      .then(res => res.json())
      .then(res => this.setState({ res }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {this.state.res}
        </div>
      </div>
    )
  }
}

export default App
