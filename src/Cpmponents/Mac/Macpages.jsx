import React, { Component } from 'react'
import Macdata from './Macdata'
import Macvideodata from './Macvideodata'
import Knowmac from './Knowmac'
import Explorelineup from './Explorelineup'
export default class Macpages extends Component {
  render() {
    return (
      <div>
        <Macdata/>
        <Macvideodata/>
        <Knowmac/>
        <Explorelineup/>
      </div>
    )
  }
}
