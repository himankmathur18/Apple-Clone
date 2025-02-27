import React, { Component } from 'react'

export default class Laptops extends Component {
    state = {
        cards: [
            {
                imgSrc: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large_2x.png",
                title: "MacBook Pro 14” and 16”",
                description: "M4, M4 Pro or M4 Max chip",
                description1: "The most advanced Mac laptops for demanding workflows.",
                bgColor: "bg-white",
                textColor: "text-gray-500",
                textClass: "text-gray-500"
            },
            {
                imgSrc: "https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png",
                title: "Today at Apple",
                description: "Join free sessions at your Apple Store.",
                bgColor: "bg-white",
                textColor: "text-gray-500",
                textClass: "text-gray-700"
            },
        ]
    }
    render() {
        return (
            <div className="flex gap-4 ml-5 w-full overflow-x-auto overflow-hidden">
                {this.state.cards.map((card, index) => (
                    <div key={index} className={`${card.bgColor} rounded-2xl shadow-md p-6 flex flex-col items-center min-w-[300px]`}>
                        <img width={300} height={200} alt="" src={card.image} className="rf-ccard-img-full mb-4" />
                        {card.subtitle && <p className="text-xl font-semibold my-2">{card.subtitle}</p>}
                        {card.title && <h3 className="text-xl font-semibold my-2">{card.title}</h3>}
                        <button className="bg-transparent px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                            Learn More
                        </button>
                        <button className="bg-transparent px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                            Bye now
                        </button>
                    </div>
                ))}

            </div>
        )
    }
}
