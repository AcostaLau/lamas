import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

export const Contador = ({stock, initial}) => {
    const [cant, setCant] = useState(initial)
    const [stk, setStk] = useState(stock)

    const sumarProducts = () => {
        
        if(stk == 0){
            return(stk, cant)
        }else{
            setStk(stk - 1)
            setCant(cant+1)
            
        }
        
       
    }
    const restarProducts = () => {
        if(cant == 0){
            return cant
        }else{
            setCant(cant-1)
            setStk(stk + 1)
            
        }
       
    }
    return (
        <div>
             <Button onClick={sumarProducts} variant="outline-primary">Sumar</Button>
             <p>{cant}</p>
             <p>Stock disponible: {stk}</p>
             <Button onClick={restarProducts} variant="outline-primary">Restar</Button>
        </div>
  )
}
