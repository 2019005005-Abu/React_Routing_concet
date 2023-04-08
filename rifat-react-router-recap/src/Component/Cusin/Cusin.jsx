import React from 'react'
import Friend from '../Friend/Friend'

const Cusin = ({children,hasFriendExists,ring}) => {
  return (
    <div>
       <h1>Cousin</h1>
       <p><small>{children}</small></p>
       {hasFriendExists && <Friend ring={ring}></Friend>}
    </div>
  )
}

export default Cusin
