import React, { useState } from 'react'
import '../../Component/Home/Home.css'
import{useLoaderData} from 'react-router-dom'
import T_shirstDetails from '../T_shirtDetails/T_shirstDetails'
import Cart from '../Cart/Cart'
import toast from 'react-hot-toast';
const Home = () => {
  const tshirts=useLoaderData();
  const [cart,setCart]=useState([]);
  

  const handleAddToCart=tshirt=>{
   console.log(tshirt);
   let exists=cart.find((ts)=>ts._id===tshirt._id);
   if(exists){
    toast('You have aleady added these product')
   }else{
    const newCart=[...cart,tshirt];
   setCart(newCart)
   }
   
  }

  const handleRemoveFromCart=(_id)=>{
    console.log("The"+_id +"is deleted");
    let remaiing=cart.filter((ts)=>ts._id !==_id);
    setCart(remaiing);
  }
  return (
    <div>
      <h1>Shirs-Length:{tshirts.length}</h1>
      <div className='TshirtsContainer'>
      <div className='cart-container'>
       <Cart 
       cart={cart}
       handleRemoveFromCart={handleRemoveFromCart}
       ></Cart>
     </div>
      {
        tshirts.map((tshirt)=>{
         return <div><T_shirstDetails 
         tshirt={tshirt} 
         key={tshirt.id} 
         handleAddToCart={handleAddToCart}

         >
         </T_shirstDetails></div>
        })
      }
      </div>
    </div>
  )
}

export default Home
