import React, { Component } from 'react';
import './App.css';
import { ProductList } from "./Product/ProductList"
import { getProducts } from "./Product/service"


class App extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    getProducts()
      .subscribe(products => {
        this.setState({ products })
      })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        <ProductList products={this.state.products}/>
          </div>
      </div>
    );
  }
}

export default App;
