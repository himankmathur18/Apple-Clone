import React, { Component } from 'react'

export default class Watchdata extends Component {
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
                <div className='flex m-[40px] pt-10'>
                    <p className='font-bold text-4xl text-left mr-[20px]'>AppleWatch</p>
                    <p className='Font-bold text-3xl text-left ml-[43rem]'>The ultimate device for a healthy life.</p>

                </div>
                <div>
                    <video ref={this.videoRef} className="p-6 rounded-2xl video-no-controls" loop autoPlay muted>
                        <source src="https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large_2x.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="rounded-3xl shadow-md p-10 flex flex-col min-w-[300px] h-[500px] bg-cover bg-center relative m-20 " style={{ backgroundImage: "url('https://www.apple.com/v/watch/bp/images/overview/black-unity/banner_unity__fo8wfqiktaa2_xlarge.jpg')" }}>
                    <span className="text-left uppercase mt-[5rem] text-white font-medium text-3xl">United by rhythm</span>
                    <h3 className="text-left text-white my-2 mr-[698px] ">The new Block Unity Apple Watch strap and matching face celebrate the unifying power of rythm -- design by black creatives and allies at Apple.</h3>
                    <div className='flex mt-[20px]'>
                        <button className="text-white px-4 py-2 hover:bg-white hover:text-black border rounded-full " onClick={() => this.setState({ selectedComponent: 'Laptops' })}> Bye </button>
                        <a href="https://www.apple.com/shop/buy" className="text-white flex ml-10 mt-5">  Learn More...<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='3em' height='1.3em'><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10" /><path d="M8 12h8m-4-4v8" /></g></svg></a>
                    </div>
                </div>
            </div>
        )
    }
}