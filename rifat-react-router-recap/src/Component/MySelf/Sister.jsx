import React, { useContext } from 'react'
import "../../Component/MySelf/Myself.css"
import { MoneyContext, RingContext } from '../GrandPa/GrandPa'

const Sister = () => {
  const angti2=useContext(RingContext);
  const [money,setMoney]=useContext(MoneyContext)
  return (
    <div>
      <h1>I have given my sister:{angti2} </h1>
      <p><small>{money}</small></p>
      <button onClick={()=>setMoney(money+1)}>Clic to increse</button>
    </div>
  )
}

export default Sister
