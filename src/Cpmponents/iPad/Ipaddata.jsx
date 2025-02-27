import React, { Component } from 'react'

export default class Ipaddata extends Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const video = this.videoRef.current;
        const scrollY = window.scrollY;
        const scale = Math.max(0.9, 1 - scrollY / 1000);
        video.style.transform = `scale(${scale})`;
    }

    render() {
        return (
            <div>
                <div className='flex p-14'>
                    <p className='font-bold text-7xl '>iPad</p>
                    <p className='Font-bold text-4xl ml-[40rem] text-left'>Touch, draw and type on one magical device.</p>
                </div>
                <div>
                    <video ref={this.videoRef} className="p-5 rounded-xl video-no-controls" loop autoPlay muted>
                        <source src="https://www.apple.com/assets-www/en_WW/ipad/welcome/7ceda512d_large_2x.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}