import React, { Component } from 'react'

export default class Ipaddata extends Component {
    render() {
        return (
            <div>
                <div className='flex p-14'>
                    <p className='font-bold text-7xl '>iPad</p>
                    <p className='Font-bold text-4xl ml-[40rem] text-left'>Touch, draw and type on one magical device.</p>
                </div>
                <div>
                    <video controls className="p-5 rounded-xl " loop autoPlay >
                        <source src="https://www.apple.com/assets-www/en_WW/ipad/welcome/7ceda512d_large_2x.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}
