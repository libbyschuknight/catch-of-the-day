import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. take a copy of existing state (state should be immutable)
    const fishes = { ...this.state.fishes };
    // 2. add our new fish to fishes var
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
