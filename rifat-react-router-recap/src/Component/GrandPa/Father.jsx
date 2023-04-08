import React from 'react'
import MySelf from "../../Component/MySelf/Myself.jsx";
import Brothers from "../../Component/MySelf/Brothers.jsx";
import Sister from "../../Component/MySelf/Sister.jsx"
const Father = ({ring}) => {
  return (
    <div>
      <h2>Father</h2>
      <section>
       <MySelf ring={ring}/>
       <Brothers/>
       <Sister/>
      </section>
    </div>
  )
}

export default Father
