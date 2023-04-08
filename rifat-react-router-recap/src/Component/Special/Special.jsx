import React, { useContext } from 'react'
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
  const angti=useContext(RingContext);
  return (
    <div>
      <h1>Special</h1>
       <h1>The ring is{angti}</h1>
      
    </div>
  )
}

export default Special
