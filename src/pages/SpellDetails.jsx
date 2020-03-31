import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SpellDetails = (props) => {
  //set var based on data passed from clicking on individual spell
  const index = props.match.params.index
  const [spell, setSpell] = useState({})

  const baseURL = 'http://www.dnd5eapi.co/'

  //poll api for individual spell data
  const getSpell = async () => {
    const resp = await axios.get(`${baseURL}${index}`)
    console.log(resp.data.results)
    setSpell(resp.data)
  }

  //poll api on page load
  useEffect(() => {
    getSpell()
  }, [index])

  const {
    _id,
    name,
    desc,
    level,
    duration,
    casting_time,
    school,
    ritual,
    concentration,
  } = spell

  return (
    <div>
      <h3>Spell Name: {name}</h3>
      <h4>D&D Beyond Spell ID: {_id}</h4>
      <h5>Level: {level}</h5>
      <h5>Casting Time: {casting_time}</h5>
      <h5>Duration: {duration}</h5>
      <h5>Requires Concentration: {concentration}</h5>
      <h5>Cast As Ritual: {ritual}</h5>
      <h5>School: {school}</h5>
      <h5>Description: {desc}</h5>
    </div>
  )
}

export default SpellDetails
