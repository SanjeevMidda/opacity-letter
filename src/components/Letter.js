import React, { useState } from 'react'

function Letter() {

    const [status, setStatus] = useState(true);

  return (
    <div className="panel" onClick={() => {setStatus(!status)}}>
        
        {
            status? <h1>A</h1> : <div className='new'><h1>B</h1></div>

        }
    </div>
  )
}

export default Letter