import React from 'react'
import { Contador } from './Contador'
import { Item } from './Item'

export const ItemContainer = () => {
  return (
    <div>
        <Item/>
        <Contador stock = {10} initial = {0} />
    </div>
  )
}
