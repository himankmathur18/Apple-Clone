import React, { Component } from "react";

class AirPodsCards extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "AirPods 4",
        description: "The next evolution of sound and comfort.",
        price: "$129",
        feature: "With Active Noise Cancellation $179",
        image: "https://example.com/airpods4.jpg", 
        bgColor: "bg-gradient-to-r from-blue-900 to-orange-300",
      },
      {
        id: 2,
        name: "AirPods Pro 2",
        description: "The world's first all-in-one hearing health experience.",
        price: "$249",
        feature: "Features available with a free software update.",
        image: "https://example.com/airpodspro2.jpg", 
        bgColor: "bg-black",
      },
      {
        id: 3,
        name: "AirPods Max",
        description: "Five fresh colors. Bold sound.",
        price: "$549",
        image: "https://www.apple.com/v/airpods/x/images/overview/airpods_max_purple__d9y3g3n7cnyq_large_2x.png", 
        bgColor: "bg-gray-100",
      },
    ],
  };

  render() {
    return (
      <div className="p-6 space-y-6">
        {this.state.products.map((product) => (
          <div
            key={product.id}
            className={`rounded-xl overflow-hidden shadow-lg p-6 ${product.bgColor}`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white max-w-lg p-6">
                <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg mb-2">{product.description}</p>
                <p className="font-semibold text-lg">{product.price}</p>
                {product.feature && <p className="text-sm text-gray-300">{product.feature}</p>}
                <div className="mt-4 flex space-x-2">
                  <button className="bg-white text-black px-4 py-2 rounded-lg">Learn more</button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buy</button>
                </div>
              </div>
              <img src={product.image} alt={product.name} className="w-64 md:w-80 rounded-lg"/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AirPodsCards;
