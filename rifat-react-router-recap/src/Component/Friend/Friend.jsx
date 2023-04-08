import React from 'react'

const Friend = ({ring}) => {
  return (
    <div>
      <h1>Friend</h1>
        {ring && <p>This is a {ring} ring</p>}
    </div>
  )
}

export default Friend
