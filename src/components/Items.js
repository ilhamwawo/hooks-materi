import React from 'react'
import { memo } from 'react'

const Items = ({ items, addItems}) => {
    console.log('item rendered')
  return (
    <>
        <h2>My items</h2>
        {items.map((item, index) => {
            return <p key={index}>{item}</p>
        }
        )}
        <button onClick={addItems} type="button">Add Item</button>
    </>
  )
}

export default memo(Items)