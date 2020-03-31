import React from 'react'

const CastClass = (props) => {
  const baseURL = 'http://www.dnd5eapi.co/'
  const { name, url } = props
  return (
    <li className="CastClass">
      <p>Class Name: {name}</p>
      <a>
        `${baseURL}${url}`
      </a>
    </li>
  )
}

export default CastClass
