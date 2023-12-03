import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch] = useState("")
  return (
    <div className='input' style={{display:"flex"}}>
        <input type='text' placeholder='type to search' onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
        <button onClick={()=>setSearch("")} style={{background:"none", width:"30px", height:"30px", justifyContent:"center",display:"flex",alignItems:"center", borderRadius:"50%", border:"1px solid gray"}}>  ❌</button>
    </div>
  )
}

export default Search