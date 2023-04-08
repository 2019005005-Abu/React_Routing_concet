import React from 'react'
import "../../Component/Cart/Cart.css";
const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message=<p>Please Add Some Product</p>
    }
    else{
        message=<div>
        <h1>Brolokas</h1>
        <small>Thanks for shopping</small>
        </div>
        
    }
  return (
    <div>
      <h2 className={cart.length===1 ?'blue':'red'}>Order Summary:{cart.length}</h2>
      {cart.length>2 ? <span className='purple'>Arro Kino</span> :<span>Fokira</span>}
      {cart.length>5 && <h1>Stop Buying</h1>}
      {message}
       {
        cart.map(function(tshirt){
            return( 
            <p key={tshirt._id}>
            {tshirt.name}
            <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
            </p>
            )
        })
       }
    </div>
  )
}

export default Cart
