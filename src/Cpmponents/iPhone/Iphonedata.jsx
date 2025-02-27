import React, { Component } from 'react'

export default class Iphonedata extends Component {
    render() {
        return (
            <div>
                <div className='flex p-14'>
                    <p className='font-bold text-7xl '>iPhone</p>
                    <p className='Font-bold text-5xl ml-[28rem]'>Designed to be loved.</p>
                </div>
                <div>
                    <video controls className="p-5 rounded-xl " loop autoPlay >
                        <source src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large_2x.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}
