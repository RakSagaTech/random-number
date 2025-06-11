// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading"> Random Number </h1>
          <p className="description">
            {' '}
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button type="button" className="generate-buttom">
            {' '}
            Generate{' '}
          </button>
          <p className="random-number"> 0 </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
