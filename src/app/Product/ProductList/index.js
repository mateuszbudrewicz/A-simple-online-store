import React from 'react'
import { ProductItem } from "./ProductItem"
import "../Product.css"
 
export const ProductList = ({ products, addToCart }) => (
    <div className="box-container">
      {products.map(product => (<ProductItem key={product.id} {...{product, addToCart}} />
    ))}</div>)