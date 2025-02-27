import React, { Component } from 'react'
import Storedata from './Storedata'
import Storeapp from './Storeapp'
import Storedifference from './Storedifference'
import Latestproductcard from './Latestproductcard'


export default class Storepages extends Component {
    render() {
        return (
            <div>
                <Storedata />
                <Storeapp />
                <Storedifference />
                <Latestproductcard />    
            </div>
        )
    }
}

