import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <span className='nav-icon'>
          <i className="fa-solid fa-leaf"></i>
        </span>
        <span>Habit Tracker</span>
        <span className='nav-count'>3</span>
      </div>
      
    )
  }
}
