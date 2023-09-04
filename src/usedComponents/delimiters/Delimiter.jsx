// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Delimiter.css'

export class Delimiter extends Component {
  static propTypes = {
    delimitAt: 'Каталог'

  }

  render() {
    return (
      <div className="flex items-center justify-center full-elem">
      <div className={` bg-yellow-700 w-11/12 m-auto my-2 h-1 line-elem flex justify-center rounded-t-full`}>
        <div className="relative flex justify-center w-2/6 bg-indigo-400 tag-elem delimitValue">
        {this.props['delimitAt']}
        </div>
         </div>
         </div>
    )
  }
}

export default Delimiter