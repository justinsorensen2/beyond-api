import React, { useState, useEffect } from 'react'
import Spell from '../components/Spell'
import axios from 'axios'

const Spells = () => {
  //set vars for using state
  const [spells, setSpells] = useState([])

  //make api call via axios
  const getSpells = async () => {
    const resp = await axios.get('http://www.dnd5eapi.co/api/spells')
    //console response then set spells in state to data from api
    console.log(resp.data.results)
    setSpells(resp.data.results)
  }
  //load api data on page load
  useEffect(() => {
    getSpells()
  }, [])

  //render spells page
  return (
    <div>
      <h1>SPELLS</h1>
      <ul className="Spells">
        {spells.map((spell) => {
          return (
            <>
              <a href={`/SpellDetails/${spell.index}`}>
                <Spell key={spell.url} name={spell.name} index={spell.index} />
              </a>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default Spells
