import React, { Component } from 'react'
import Ipadheader from './Ipadheader'
import Ipaddata from './Ipaddata'
import KnowiPad  from './KnowiPad'
import ExploreLineup from './ExploreLineup'

export default class Ipadpages extends Component {
  render() {
    return (
      <div>
        <Ipadheader/>
        <Ipaddata/>
        <KnowiPad />
        <ExploreLineup/>
      </div>
    )
  }
}
