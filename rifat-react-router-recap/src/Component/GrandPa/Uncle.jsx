import React, { useContext } from 'react'
import Cusin from '../Cusin/Cusin'
import { MoneyContext } from './GrandPa'
const Uncle = () => {
  const [money,setMoney]=useContext(MoneyContext);
  return (
    <div>
      <h1>Uncle</h1>
      <p><small>GrandPa Money:{money}</small></p>
      <button onClick={()=>setMoney(money+1000)}>send 1000</button>
      <section className='flex'>
      <Cusin>Nabil</Cusin>
      <Cusin>Nabila</Cusin>
      </section>
    </div>
  )
}

export default Uncle
