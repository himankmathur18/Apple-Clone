import React, { Component } from 'react'
import { FaLaptop, FaDesktop, FaServer, FaTv, FaShoppingCart, FaArrowsAltH, FaPlug, FaTree } from 'react-icons/fa';

export default class dMacdata extends Component {
  render() {
    return (
      <header className="w-full border-b border-gray-300 bg-white">
      <div className="w-full bg-white border-t border-gray-300 py-3">
        <div className="flex justify-center space-x-10 text-sm text-gray-800 m-10">
          {[
            { name: "MacBook Air", icon: <FaLaptop /> },
            { name: "MacBook Pro", icon: <FaLaptop />, new: true },
            { name: "iMac", icon: <FaDesktop />, new: true },
            { name: "Mac mini", icon: <FaServer />, new: true },
            { name: "Mac Studio", icon: <FaServer /> },
            { name: "Mac Pro", icon: <FaServer /> },
            { name: "Compare", icon: <FaArrowsAltH /> },
            { name: "Displays", icon: <FaTv /> },
            { name: "Accessories", icon: <FaPlug /> },
            { name: "Sequoia", icon: <FaTree /> },
            { name: "Shop Mac", icon: <FaShoppingCart /> },
          ].map(({ name, icon, new: isNew }) => (
            <div key={name} className="flex flex-col items-center space-y-1">
              <span className="text-2xl">{icon}</span>
              <span className="text-xs">{name}</span>
              {isNew && <span className="text-xs text-red-500">New</span>}
            </div>  
          ))}
        </div>
      </div>
    </header>
    )
  }
}