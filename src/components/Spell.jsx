import React from 'react'

const Spell = (props) => {
  const { name, index } = props
  return (
    <li className="Card">
      <h3>Spell Name: {name}</h3>
      <h5>D&D Beyond Index: {index}</h5>
    </li>
  )
}

export default Spell
