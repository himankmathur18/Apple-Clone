import React, { Component } from 'react'

export default class WatchKnow extends Component {
    state = {
        cards: [
            {
                id: 1,
                title: "Apple Intelligence",
                subtitle: "Powerful possibilities.",
                image: "https://www.apple.com/v/watch/bp/images/overview/consider/feature_health__b8l8jg8aa0b6_large_2x.jpg",
            },
            {
                id: 2,
                title: "Performance and Battery Life",
                subtitle: "Go fast. Go far.",
                image: "https://www.apple.com/v/watch/bp/images/overview/consider/feature_fitness__bqrhzxk45liu_large_2x.jpg",
            },
            {
                id: 3,
                title: "Chip and Battery Life",
                subtitle: "Fast that lasts.",
                image: "https://www.apple.com/in/watch/images/overview/consider/feature_connectivity__k68bkgj3a6ie_large_2x.jpg",
            },
            {
                id: 4,
                title: "Innovation",
                subtitle: "Butifull and durable, by design.",
                image: "https://www.apple.com/v/watch/bp/images/overview/consider/feature_safety__c5gr3nzfh20y_large_2x.jpg",
            },
            {
                id: 5,
                title: "Environment",
                subtitle: "recycle. Reuse. Repeat.",
                image: "https://www.apple.com/v/watch/bp/images/overview/consider/feature_watch_and_iphone__co3lxacgl3qu_large_2x.jpg",
            },
            {
                id: 6,
                title: "Privacy",
                subtitle: "Your data Just Shere you want it.",
                image: "https://www.apple.com/v/watch/bp/images/overview/consider/feature_personalization__fdz9dgc5afma_large_2x.jpg",
            },
            {
                id: 7,
                title: "Customise Your iPhone",
                subtitle: "Make it you. Through and through.",
                image: "https://www.apple.com/in/watch/images/overview/consider/feature_adventure__dswfr09jo8q6_large_2x.jpg",
            },
            {
                id: 8,
                title: "Peace of Mind",
                subtitle: "Helpful features. Justin case.",
                image: "https://www.apple.com/in/watch/images/overview/consider/feature_family_setup__ghz0t0it1hay_large_2x.jpg",
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
                <div className="font-bold text-5xl p-8 text-left">
                    <h1>Get to know Apple Watch.</h1>
                </div>
                <div className="relative">
                    <button onClick={this.scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-5 rounded-full shadow-md">
                        &lt;
                    </button>
                    <div ref={(el) => { this.scrollContainer = el }} className="flex gap-4 ml-5 w-full h-full overflow-x-auto overflow-hidden">
                        {this.state.cards.map((card, index) => (
                            <button key={index} className="rounded-2xl shadow-md p-8 flex flex-col min-w-[400px] h-[500px] bg-cover bg-center relative" style={{ backgroundImage: `url(${card.image})` }}>
                                <div className="absolute top-0 left-0  p-4 rounded-lg text-left">
                                    {card.title && <h3 className="text-xl font-semibold my-2 text-white">{card.title}</h3>}
                                    {card.subtitle && <p className="text-xl font-semibold my-2 text-white">{card.subtitle}</p>}
                                </div>
                            </button>
                        ))}
                    </div>
                    <button onClick={this.scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-5 rounded-full shadow-md">
                        &gt;
                    </button>
                </div>
            </div>
        )
    }
}
