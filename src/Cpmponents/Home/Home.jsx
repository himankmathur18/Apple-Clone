import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div >
        <nav className="w-full h-[40px] fixed z-[2] flex justify-center items-center bg-gray-100 backdrop-blur-[2.5px] text-black-700 text-[12px] gap-[3.4em]">
          <a className="A" href="#Home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='2em' height='2em'><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25" /></svg></a>
          <a className="A" href="/store">Store</a>
          <a className="A" href="/mac">Mac</a>
          <a className="A" href="/iPad">iPad</a>
          <a className="A" href="/iPhone">iPhone</a>
          <a className="A" href="/Watch">Watch</a>
          <a className="A" href="/AirPods">AirPods</a>
          <a className="A" href="/TV & Home">TV & Home</a>
          <a className="A" href="/Entertainment">Entertainment</a>
          <a className="A" href="#/Accessories">Accessories</a>
          <a className="A" href="/Support">Support</a>
          <a className="A" href="#search"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='2em' height='2em'><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" /></svg></a>
          <a className="A" href="#bag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='2em' height='2em'><path fill="currentColor" d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z" /></svg></a>
        </nav>

        <div className="h-[40px] bg-white relative top-[40px] flex justify-center items-center text-black-700 text-[14px] z-[1] fade-in">
          Get up to 24 months of No Cost EMI plus up to ₹10000.00 instant cashback* on selected products with eligible cards.<a className="text-blue-300 hover:text-blue-600" href="/"> Shop Now!</a>
        </div>
      </div>

    )
  }
}
