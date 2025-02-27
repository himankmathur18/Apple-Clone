import React, { Component } from 'react'

export default class KnowiPhone extends Component {
    state = {
        cards: [
            {
                id: 1,
                title: "Apple Intelligence",
                subtitle: "Powerful possibilities.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_large_2x.jpg",
            },
            {
                id: 2,
                title: "Performance and Battery Life",
                subtitle: "Go fast. Go far.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/camera__exi2qfijti0y_large_2x.jpg",
            },
            {
                id: 3,
                title: "Chip and Battery Life",
                subtitle: "Fast that lasts.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_large_2x.jpg",
            },
            {
                id: 4,
                title: "Innovation",
                subtitle: "Butifull and durable, by design.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/innovation__os9bmmo3mjee_large_2x.jpg",
            },
            {
                id: 5,
                title: "Environment",
                subtitle: "recycle. Reuse. Repeat.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/environment__e3v3gj88dl6q_large_2x.jpg",
            },
            {
                id: 6,
                title: "Privacy",
                subtitle: "Your data Just Shere you want it.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/privacy__ckc0wa30o55y_large_2x.jpg",
            },
            {
                id: 7,
                title: "Customise Your iPhone",
                subtitle: "Make it you. Through and through.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/personalize__dwg8srggrbo2_large_2x.jpg",
            },
            {
                id: 8,
                title: "Peace of Mind",
                subtitle: "Helpful features. Justin case.",
                image: "https://www.apple.com/in/iphone/home/images/overview/consider/safety__d9zsvrorjfcm_large_2x.jpg",
            },
        ],
    };

    scrollLeft = () => {
        this.scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    };

    scrollRight = () => {
        this.scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    };

    render() {
        return (
            <div className='p-10'>
                <div className="font-bold text-5xl p-10 text-left">
                    <h1>Get to know Mac.</h1>
                </div>
                <div className="relative">
                    <button onClick={this.scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">
                        &lt;
                    </button>
                    <div ref={(el) => { this.scrollContainer = el }} className="flex gap-4 ml-5 w-full overflow-x-auto overflow-hidden">
                        {this.state.cards.map((card, index) => (
                            <button key={index} className="rounded-2xl shadow-md p-8 flex flex-col min-w-[400px] h-[500px] bg-cover bg-center relative" style={{ backgroundImage: `url(${card.image})` }}>
                                <div className="absolute top-0 left-0  p-4 rounded-lg text-left">
                                    {card.title && <h3 className="text-xl font-semibold my-2 text-white">{card.title}</h3>}
                                    {card.subtitle && <p className="text-xl font-semibold my-2 text-white">{card.subtitle}</p>}
                                </div>
                            </button>
                        ))}
                    </div>
                    <button onClick={this.scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md">
                        &gt;
                    </button>
                </div>
            </div>
        )
    }
}