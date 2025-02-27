import React, { Component } from "react";

export default class Knowmac extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: "Apple Intelligence and macOS",
        subtitle: "Built for Apple Intelligence.",
        image: "https://www.apple.com/in/mac/home/images/overview/consider/mac_intelligence__esfi0qmvis6e_large_2x.jpg",
      },
      {
        id: 2,
        title: "Performance and Battery Life",
        subtitle: "Go fast. Go far.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg",
      },
      {
        id: 3,
        title: "Mac and iPhone",
        subtitle: "Dream team.",
        image: "https://www.apple.com/in/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_large_2x.jpg",
      },
      {
        id: 4,
        title: "Compatibility",
        subtitle: "Mac runs your favourite apps.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg",
      },
      {
        id: 5,
        title: "Privacy and Security",
        subtitle: "Your browser is nobody else's.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_security__gfwda10khdym_large_2x.jpg",
      },
      {
        id: 6,
        title: "Durability",
        subtitle: "Built to stand the test of time.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_durability__epiwcuk7zkeq_large_2x.jpg",
      },
      {
        id: 7,
        title: "Apple Values",
        subtitle: "Our values drive everything we do.",
        image: "https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_values__c9gck9qi4kia_large_2x.jpg",
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
        <div className="font-bold text-5xl  text-left">
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
    );
  }
}