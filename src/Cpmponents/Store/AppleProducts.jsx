import React, { Component } from "react";
import Helppage from "./Helppage";
import Latestproductcards from "./Latestproductcard";
import Latestproducts from "./Latestproducts";

const products = [
  { name: "Mac", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663" },
  { name: "iPhone", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=1738706422726" },
  { name: "iPad", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875" },
  { name: "Apple Watch", image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838" },
  { name: "AirPods", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822" },
  { name: "AirTag", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" },
  { name: "Apple TV 4K", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" },
  { name: "HomePod", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" },
  { name: "Accessories", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174" },
];

class AppleProducts extends Component {
  render() {
    return (
      <div className="bg-gray-100 p-20">
        <div className="flex justify-center space-x-8 bg-gray-100 py-7">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-50 object-contain mx-auto"
              />
              <p className="mt-2 text-gray-900 text-sm font-medium">{product.name}</p>
            </div>
          ))}
        </div>
        <Latestproducts />
        <Latestproductcards />
        <Helppage />
      </div>
    );
  }
}

export default AppleProducts;