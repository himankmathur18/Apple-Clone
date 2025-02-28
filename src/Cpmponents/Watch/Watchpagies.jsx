import React, { Component } from 'react'
import Watchdata from './Watchdata'
import WatchKnow from './WatchKnow'
import WatchHeader from './WatchHeader'
export default class Watchpagies extends Component {
  
  render() {
    return (
      <div>
        <WatchHeader/>
        <Watchdata/>
        <WatchKnow/>
      </div>
    )
  }
}
