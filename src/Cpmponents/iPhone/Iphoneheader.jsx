// import React from 'react'
import React, { Component } from 'react'
import { FaTabletAlt, FaApple, FaKeyboard, FaShoppingCart, FaPhone } from 'react-icons/fa'

export default class Iphoneheader extends Component {
  render() {
    return (
        <header className="w-full border-b border-gray-300 bg-white">
        <div className="w-full bg-white border-t border-gray-300 py-3">
            <div className="flex justify-center space-x-10 text-sm text-gray-800 m-10">
                {[
                    { name: "iPad Pro", icon: <FaPhone /> },
                    { name: "iPad Air", icon: <FaTabletAlt />,  },
                    { name: "iPad", icon: <FaTabletAlt />,  },
                    { name: "iPad mini", icon: <FaTabletAlt />,  },
                    { name: "Compare", icon: <FaApple /> },
                    { name: "Apple Pencil", icon: <FaApple /> },
                    { name: "Keyboards", icon: <FaKeyboard /> },
                    { name: "iPadOS 18", icon: <FaApple /> },
                    { name: "Shop iPad", icon: <FaShoppingCart /> },
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
