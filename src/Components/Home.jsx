import React, { useState } from 'react'
import './Home.css'

function Home() {
    const [inputvalue,setinputvalue] = useState(" ")
    const myfunc = () =>
    {
        const myvar = "0123456789"
        let t =''
        for (let i=0; i<4; i++)
        {
            t += myvar[Math.floor(Math.random()*myvar.length)]
        }
        setinputvalue(t)
    }
  return (
    <>
    <div className="container  d-flex justify-content-center align-items-center">
      <div className="head bg-secondary w-75 h-25 text-center">
        <div className="intro">
          <h1>Random Password Generate</h1>

        </div>
      <div className="body d-flex justify-content-center align-items-center mb-3">
        <input className='form-control w-25 mt-3 text-center' type="text" value={inputvalue} />
      </div>
        <button className='btn btn-warning' onClick={myfunc}>Gen</button>
      </div>
      </div>
    
    </>
  )
}

export default Home