import React, { createContext, useState } from 'react'
import Father from '../../Component/GrandPa/Father';
import Uncle from "../../Component/GrandPa/Uncle";
import Aunty from "../../Component/GrandPa/Aunty";
import "../../Component/GrandPa/GrandPa.css"
export const RingContext=createContext('gold');
export const MoneyContext=createContext(0);
const GrandPa = () => {
  const ring=`diamond`;
  const [money,setMoney]=useState(0)

  return (
    <div className='grandPa'>
      <h2>GrandPa</h2>
       <p>Has Money:{money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
      <RingContext.Provider value='Golden Ring'>
      <section className='flex'>
      <Father ring={ring}></Father>
      <Uncle></Uncle>
      <Aunty></Aunty>
     </section>
      </RingContext.Provider>
      </MoneyContext.Provider>
     
    </div>
  )
}

export default GrandPa
