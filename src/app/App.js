import React, { Component } from 'react';
import './App.css';
import { ProductList } from "./Product/ProductList"
import { getProducts } from "./Product/service"

const getProduct = (id, products) => products.find(product => product.id === id)
const createItem = (amount, product) => ({ amount, ...product })
const getUpdatedCart = (cartItems, item) => cartItems.concat(item)


class App extends Component {
  state = {
    products: [], 
    cartItems: []
  }
  componentDidMount() {
    getProducts()
      .subscribe(products => {
        this.setState({ products })
      })
  }
  addToCart = id => e => {
    console.log(e.target.elements.amount.value, id)
    e.preventDefault()
    const updatedCart = getUpdatedCart(this.state.cartItems, createItem(
      e.target.elements.amount.value, 
      getProduct(id, this.state.products)
      )
    )
    this.setState({ cartItems: updatedCart })
  }
  render() {
    console.log(this.state.cartItems)
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
