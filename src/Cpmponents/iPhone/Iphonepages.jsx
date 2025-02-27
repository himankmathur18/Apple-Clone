import React, { Component } from 'react'
import Ipadheader from './Iphoneheader'
import Iphonedata from './Iphonedata'
import KnowiPhone from './KnowiPhone'
export default class Ipadpages extends Component {
  render() {
    return (
      <div>
        <Ipadheader/>
        <Iphonedata/>
        <KnowiPhone/>
      </div>
    )
  }
}
