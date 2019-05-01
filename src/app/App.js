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
  addToCart = (e) => {
    console.log(e.target.elements.amount.value)
    e.preventDefault()
  }
  render() {
    const { addToCart } = this
    const { products } = this.state
    return (
      <div className="App">
        <div className="container">
        <ProductList {...{addToCart, products }}/>
          </div>
      </div>
    );
  }
}

export default App;
