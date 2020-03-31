import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Link to="/Spells">SPELLS</Link>
      <Link to="/Equipment">EQUIPMENT</Link>
      <Link to="/Races">RACES</Link>
      <Link to="/Classes">CLASSES</Link>
    </>
  )
}

export default HomePage
