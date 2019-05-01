import React from 'react'
import 'rxjs/add/operator/map';

export const Cart = ({ cartItems }) => (
    <div>
        {cartItems.map(item => <div key={item.id}>Amount: {item.amount}, Name: {item.name}</div>)}
    </div>
)