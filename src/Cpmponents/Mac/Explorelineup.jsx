import React, { Component } from 'react';
import Laptops from './Laptops';
import Desktops from './Desktops';
import Displays from './Displays';

export default class Explorelineup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: null,
    };
  }

  renderComponent() {
    const { selectedComponent } = this.state;
    switch (selectedComponent) {
      case 'Laptops':
        return <Laptops />;
      case 'Desktops':
        return <Desktops />;
      case 'Displays':
        return <Displays />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="text-center p-4">
        <h1 className='font-bold text-5xl mb-4 mt-20 text-left'>Explore the line-up.</h1>
        <div className="space-x-4 text-left">
          <button
            className="text-black px-4 py-2 hover:bg-gray-900 hover:text-white border rounded-full"
            onClick={() => this.setState({ selectedComponent: 'Laptops' })}
          >
            Laptops
          </button>
          <button
            className="text-black px-4 py-2 hover:bg-gray-900 hover:text-white border rounded-full"
            onClick={() => this.setState({ selectedComponent: 'Desktops' })}
          >
            Desktops
          </button>
          <button
            className="text-black px-4 py-2 hover:bg-gray-900 hover:text-white border rounded-full"
            onClick={() => this.setState({ selectedComponent: 'Displays' })}
          >
            Displays
          </button>
        </div>
        <div className="mt-4">
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}