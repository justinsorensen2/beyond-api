import React from 'react'

const CastClass = (props) => {
  const { name, url } = props
  const fullURL = `http://www.dnd5eapi.co${url}`
  return (
    <li className="CastClass">
      <h5>
        Class Name: <span>{name}</span>
      </h5>
      <h5>
        <a href={fullURL}>http://www.dnd5eapi.co{url}</a>
      </h5>
    </li>
  )
}

export default CastClass
