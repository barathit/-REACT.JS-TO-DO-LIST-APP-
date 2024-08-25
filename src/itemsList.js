import React from 'react'
import Lineitems from './Lineitems';

const itemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
          {items.map((item) => (
     < Lineitems
     item = {item}
     key = {item.id}
  handleCheck = {handleCheck}
  handleDelete = {handleDelete}
     />
          ))}
        </ul>
  )
}

export default itemsList