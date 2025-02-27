import React, { Component } from 'react'

export default class KnowiPhone extends Component {
    state = {
        cards: [
            {
                id: 1,
                title: "Apple Intelligence",
                subtitle: "Powerful possibilities.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_large_2x.jpg",
                bgColor: "bg-black text-white",
            },
            {
                id: 2,
                title: "Performance and Battery Life",
                subtitle: "Go fast. Go far.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/camera__exi2qfijti0y_large_2x.jpg",
                bgColor: "bg-blue-900 text-white",
            },
            {
                id: 3,
                title: "Chip and Battery Life",
                subtitle: "Fast that lasts.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_large_2x.jpg",
                bgColor: "bg-black text-white",
            },
            {
                id: 4,
                title: "Innovation",
                subtitle: "Butifull and durable, by design.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/innovation__os9bmmo3mjee_large_2x.jpg",
                bgColor: "bg-gray-300",
            },
            {
                id: 5,
                title: "Environment",
                subtitle: "recycle. Reuse. Repeat.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/environment__e3v3gj88dl6q_large_2x.jpg",
                bgColor: " w-full flex items-center justify-center bg-blue-100",
            },
            {
                id: 6,
                title: "Privacy",
                subtitle: "Your data Just Shere you want it.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/privacy__ckc0wa30o55y_large_2x.jpg",
                bgColor: "bg-black text-white",
            },
            {
                id: 7,
                title: "Customise Your iPhone",
                subtitle: "Make it you. Through and through.",
                image: "https://www.apple.com/v/iphone/home/cb/images/overview/consider/personalize__dwg8srggrbo2_large_2x.jpg",
                bgColor: "bg-black text-white",
            },
            {
                id: 7,
                title: "Peace of Mind",
                subtitle: "Helpful features. Justin case.",
                image: "https://www.apple.com/in/iphone/home/images/overview/consider/safety__d9zsvrorjfcm_large_2x.jpg",
                bgColor: "bg-black text-white",
            },
        ],
    };
    render() {
        return (
            <div>
                <div className="font-bold text-5xl p-10 text-left">
                    <h1>Get to know iPhone.</h1>
                </div>
                <div className="flex gap-4 ml-5 w-full overflow-x-auto overflow-hidden">
                    {this.state.cards.map((card, index) => (
                        <div key={index} className={`${card.bgColor} rounded-2xl shadow-md p-6 flex flex-col items-center min-w-[300px]`}>
                            {card.title && <h3 className="text-xl font-semibold my-2">{card.title}</h3>}
                            {card.subtitle && <p className="text-xl font-semibold my-2">{card.subtitle}</p>}
                            <img width={300} height={200} alt="" src={card.image} className="rf-ccard-img-full mb-4" />
                            <button className="bg-transparent px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                                Learn More.
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}
