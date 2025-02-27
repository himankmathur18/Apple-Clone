import React, { Component } from 'react'


export default class Desktops extends Component {
    State = {
        cards: [
            {
                title: "Apple Specialist",
                description: "Shop one on one with a Specialist online.",
                imgSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821",
                bgColor: "bg-white",
                textColor: "text-gray-500",
                textClass: "text-gray-500"
            },
            {
                title: "Today at Apple",
                description: "Join free sessions at your Apple Store.",
                additionalText: "Learn about the latest features and how to go further with your Apple devices.",
                imgSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
                bgColor: "bg-white",
                textColor: "text-gray-500",
                textClass: "text-gray-700"
            },
            {
                imgSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1724793636957",
                description: "From enterprise to small business, we’re here for you.",
                title: "Business",
                bgColor: "bg-black",
                textColor: "text-gray-400",
                textClass: "text-white"
            },
            
        ]
    }

    render() {
        return (

            <div>
                <div className="bg-gray-100 py-10 px-5 flex flex-col">
                    <h2 className="text-2xl font-bold text-left p-10">
                        Help is here. <span className="font-bold text-gray-500">Whenever and however you need it.</span>
                    </h2>
                    <div className="flex gap-6 max-w-6xl w-full overflow-x-auto">
                        {this.state.cards.map((card, index) => (
                            <div key={index} className={`${card.bgColor} rounded-2xl shadow-md p-6 flex flex-col items-center text-center min-w-[300px]`}>
                                <span className={`text-sm uppercase ${card.textColor} font-medium`}>{card.title}</span>
                                <h3 className={`text-xl font-semibold my-2 ${card.textClass}`}>{card.description}</h3>
                                {card.additionalText && <p className={card.textClass}>{card.additionalText}</p>}
                                <img width="500" height="500" alt="" src={card.imgSrc} className="rf-ccard-img-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}