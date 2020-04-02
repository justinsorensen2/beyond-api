import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CastClass from '../components/CastClass'

const SpellDetails = (props) => {
  const index = props.match.params.index
  //set var based on data passed from clicking on individual spell
  const [spell, setSpell] = useState()
  const [loaded, setLoaded] = useState(false)
  // //set var for the classes sub-component of spell obj
  // const [castClass, setCastClass] = useState()
  // //set var for the components sub-component of spell obj
  // const [spellComponents, setSpellComponents] = useState()

  //set var for base api url
  const baseURL = 'http://www.dnd5eapi.co/api/spells/'

  //poll api for individual spell data and sub-components
  const getSpell = async () => {
    const resp = await axios.get(`${baseURL}${index}`)
    console.log(resp.data)
    setSpell(resp.data)
    setLoaded(true)
    // setCastClass(resp.data.classes)
    // setSpellComponents(resp.data.components)
  }

  //poll api on page load
  useEffect(() => {
    getSpell()
  }, [index])

  //render
  if (!loaded) {
    return <div> Loading... </div>
  }
  //set var for value of concentration
  const concentrationValue = spell.concentration ? 'Yes' : 'No'

  //set var for value of higher_level
  const higherLevelValue = spell.higher_level || 'Not Applicable'

  //set var for material component
  const materialValue = spell.material || 'Not Applicable'

  return (
    <div>
      <h3>
        Spell Name: <span>{spell.name}</span>
      </h3>
      <h5>
        Level: <span>{spell.level}</span>
      </h5>
      <h5>
        Casting Time: <span>{spell.casting_time}</span>
      </h5>
      <h5>
        Duration: <span>{spell.duration}</span>
      </h5>
      <h5>
        Range: <span>{spell.range}</span>
      </h5>
      <h5>
        Requires Concentration: <span>{concentrationValue}</span>
      </h5>
      <h5>
        Cast As Ritual: <span>{spell.ritual ? 'Yes' : 'No'}</span>
      </h5>
      <h5>
        School: <span>{spell.school.name}</span>
      </h5>
      <h5>
        Description: <span>{spell.desc}</span>
      </h5>
      <h5>
        Cast at Higher Level: <span>{higherLevelValue}</span>
      </h5>
      <h5>Components:</h5>
      <h5 classname="SpellComponents">
        {spell.components.map((spellComponent) => (
          <li>{spellComponent}</li>
        ))}
      </h5>
      <h5>
        Material: <span>{materialValue}</span>
      </h5>
      <h5>Classes Which Can Cast:</h5>
      {spell.classes.map((classes) => {
        return (
          <>
            <CastClass
              key={classes.name}
              name={classes.name}
              url={classes.url}
            />
          </>
        )
      })}
    </div>
  )
}

export default SpellDetails
