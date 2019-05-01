import React from 'react'

export const ProductItem = ({ product: {id, name, price, description, image},
    addToCart
}) => (
        <div className="box" key = {id}>
          <div>{name}</div>
          <img alt="" src={image} />
          <div>{price}</div>
          <div>{`${description.substring(0,60)}...`}</div>
          <div className="add-form">
            <form onSubmit={ addToCart(id) }>
                Amount: <input type="number" name="amount" />
                <button>Add to cart</button>
            </form>
          </div>
        </div>
)