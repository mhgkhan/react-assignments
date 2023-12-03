import React, { useState } from 'react'

const Withinput = () => {

    const [disabled,setDisabled] = useState(false)
    const [input,setInput] = useState("");
    const [limit,setLimit]  = useState(20)



  return (
    <div>
        <h2> Disabled Limit is : {limit}  </h2>
        <input type="text" placeholder='type text' onChange={
            e=>{
                setInput(e.target.value)
                e.target.value.length < limit ? setDisabled(false):setDisabled(true)
            }
            } disabled={disabled} />
        <button disabled={disabled?false:true} onClick={()=>{
            setDisabled(false)
            setLimit(limit+limit)
        }} >Enable</button>
    </div>
  )
}

export default Withinput