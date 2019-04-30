import React from 'react'

export const ProductItem = ({ product: {id, name, price, description, image} }) => (
        <div className="box" key = {id}>
          <div>{name}</div>
          <img alt="" src={image} />
          <div>{price}</div>
          <div>{`${description.substring(0,60)}...`}</div>
        </div>
)