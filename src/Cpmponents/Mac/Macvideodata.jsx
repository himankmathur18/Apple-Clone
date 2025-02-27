import React, { Component } from 'react'

export default class Macvideodata extends Component {
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
                    <p className='font-bold text-7xl'>Mac</p>
                    <p className='Font-bold text-5xl ml-[37rem] text-left'>If you can dream it, Mac can do it.</p>
                </div>
                <div>
                    <video ref={this.videoRef} className="p-5 rounded-xl video-no-controls" loop autoPlay muted>
                        <source src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/large_2x.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}