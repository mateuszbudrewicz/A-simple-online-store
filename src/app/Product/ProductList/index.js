import React from 'react'

export const ProductList = ({ products }) => (
    <div>
    {products.map( ({ id, name, price, description }) => (
        <div key = {id}>
          <div>{name}</div>
          <div>{price}</div>
          <div>{description}</div>
          <div>---------------------</div>
        </div>
        )
        )}
    </div>
    )