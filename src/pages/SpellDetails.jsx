import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SpellDetails = (props) => {
  const index = props.match.params.index
  //set var based on data passed from clicking on individual spell
  const [spell, setSpell] = useState({})

  //set var for base api url
  const baseURL = 'http://www.dnd5eapi.co/api/spells/'

  //poll api for individual spell data
  const getSpell = async () => {
    const resp = await axios.get(`${baseURL}${props}`)
    console.log(resp.data)
    setSpell(resp.data)
  }

  //poll api on page load
  useEffect(() => {
    getSpell()
  }, [index])

  // const name = spell.name
  // const desc = spell.desc
  // const level = spell.level
  // const duration = spell.duration
  // const casting_time = spell.casting_time
  // const school = spell.school.name
  // const ritual = spell.ritual
  // const concentration = spell.concentration

  return (
    <div>
      <h3>Spell Name: {spell.name}</h3>
      <h5>Level: {spell.level}</h5>
      <h5>Casting Time: {spell.casting_time}</h5>
      <h5>Duration: {spell.duration}</h5>
      <h5>Requires Concentration: {spell.concentration}</h5>
      <h5>Cast As Ritual: {spell.ritual}</h5>
      <h5>School: {spell.school.name}</h5>
      <h5>Description: {spell.desc}</h5>
    </div>
  )
}

export default SpellDetails
