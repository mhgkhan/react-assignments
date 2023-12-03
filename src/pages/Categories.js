import React, { useEffect, useState } from 'react'

const Categories = ({products}) => {
    const [categories,setCategoris] = useState([]);

    
   

   return(
    categories && categories.map(category=>{
        return <button>{category}</button>
    })
    )

}

export default Categories