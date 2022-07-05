import React, { useState } from 'react'

export const Item = () => {
    const [img, setImg] = useState([{
        imagen : 'https://picsum.photos/200/300'
    }])
  return (
    <div>
       {
           img.map((element) => {
               return(
                   <img src={element.imagen} alt='imagen producto'></img>
               )
           })
       }
    </div>
  )
}
