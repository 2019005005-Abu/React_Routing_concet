import React from 'react'
import Cusin from '../Cusin/Cusin'
const Aunty = ({ring}) => {
  return (
    <div>
      <h1>Aunty</h1>
      <section className='flex'>
      <Cusin>Karim</Cusin>
      <Cusin hasFriendExists={true} 
      ring={ring}>Rahim</Cusin>
      </section>
    </div>
  )
}

export default Aunty
