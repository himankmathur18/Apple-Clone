import React, { Component } from 'react'

export default class Iphonedata extends Component {
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
                <div className='flex m-10'>
                    <p className='font-bold text-7xl '>iPhone</p>
                    <p className='Font-bold text-5xl ml-[28rem]'>Designed to be loved.</p>
                </div>
                <div>
                    <video ref={this.videoRef} className="p-6 rounded-2xl video-no-controls" loop autoPlay muted>
                        <source src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large_2x.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}