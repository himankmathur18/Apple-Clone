import React, { Component } from "react";

export default class Knowmac extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: "Apple Intelligence and macOS",
        subtitle: "Built for Apple Intelligence.",
        image: "https://www.apple.com/in/mac/home/images/overview/consider/mac_intelligence__esfi0qmvis6e_large_2x.jpg",
        bgColor: "bg-gray-100",
      },
      {
        id: 2,
        title: "Performance and Battery Life",
        subtitle: "Go fast. Go far.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg",
        bgColor: "bg-black text-white",
      },
      {
        id: 3,
        title: "Mac and iPhone",
        subtitle: "Dream team.",
        image: "https://www.apple.com/in/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_large_2x.jpg",
        bgColor: "bg-green-100",
      },
      {
        id: 4,
        title: "Compatibility",
        subtitle: "Mac runs your favourite apps.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg",
        bgColor: "bg-blue-300",
      },
      {
        id: 5,
        title: "Privacy and Security",
        subtitle: "Your browser is nobody else's.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_security__gfwda10khdym_large_2x.jpg",
        bgColor: " w-full flex items-center justify-center bg-gradient-to-b from-red-400 via-pink-500 to-blue-500",
      },
      {
        id: 6,
        title: "Durability",
        subtitle: "Built to stand the test of time.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_durability__epiwcuk7zkeq_large_2x.jpg",
        bgColor: "bg-black",
      },
      {
        id: 7,
        title: "Apple Values",
        subtitle: "Our values drive everything we do.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_values__c9gck9qi4kia_large_2x.jpg",
        bgColor: "bg-green-300",
      },
    ],
  };

  render() {
    return (
      <div>
        <div className="font-bold text-5xl p-10 text-left">
          <h1>Get to know Mac.</h1>
        </div>
        <div className="flex gap-4 ml-5 w-full overflow-x-auto overflow-hidden">
          {this.state.cards.map((card, index) => (
            <div key={index} className={`${card.bgColor} rounded-2xl shadow-md p-6 flex flex-col items-center min-w-[300px]`}>
              {card.title && <h3 className="text-xl font-semibold my-2">{card.title}</h3>}
              {card.subtitle && <p className="text-xl font-semibold my-2">{card.subtitle}</p>}
              <img width={300} height={200} alt="" src={card.image} className="rf-ccard-img-full mb-4" />
              <button className="bg-transparent px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </div>
    );
  }
}