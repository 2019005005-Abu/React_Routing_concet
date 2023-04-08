import React from 'react'
import  "../../../src/Component/T_shirtDetails/T_shirt.css"
const T_shirstDetails = ({tshirt,handleAddToCart}) => {
    const{
        picture,
        name,
        price,
        
    }=tshirt
  return (
    <div className='T_shirtsDetailsStyle'>
      <img src={picture} className='T_shirtPicture'/>
      <h1 className='T_shirtName'>Name:{name}</h1>
      <p className='T_shirtPrice'>Price : ${price}</p>
      <button className='btnColor'onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  )
}

export default T_shirstDetails
