import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  c = 'john'
  render() {
    return (
      <div>
        This is my First class based component. Hi {this.c}
      </div>
    )
  }
}

