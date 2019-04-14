import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Product #1",
        price: 100,
        description: "Description #1"
      },
      {
        id: 2,
        name: "Product #2",
        price: 200,
        description: "Description #2"
      },
      {
        id: 3,
        name: "Product #3",
        price: 300,
        description: "Description #3"
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <div>{this.state.products.map(product => 
          <div key = {product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>---------------------</div>
          </div>)}
          </div>
      </div>
    );
  }
}

export default App;
