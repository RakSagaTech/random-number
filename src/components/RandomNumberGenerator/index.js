// Write your code here
import {Component} from 'react'

import './index.css'


class RandomNumberGenerator extends Component{
    render(){
        return (
            <div>
                <div>
                    <h1> Random Number </h1>
                    <p> Generate a random number in the range of 0 to 100 </p>
                    <button type="button"> Generate </button>
                    <p> 0 </p>
                </div>
            </div>
        )
    }
}

export default RandomNumberGenerator