import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CastClass from '../components/CastClass'

const SpellDetails = (props) => {
  const index = props.match.params.index
  //set var based on data passed from clicking on individual spell
  const [spell, setSpell] = useState()
  //set var for the classes sub-component of spell obj
  const [castClass, setCastClass] = useState()
  //set var for the components sub-component of spell obj
  const [spellComponents, setSpellComponents] = useState()

  //set var for base api url
  const baseURL = 'http://www.dnd5eapi.co/api/spells/'

  //poll api for individual spell data and sub-components
  const getSpell = async () => {
    const resp = await axios.get(`${baseURL}${index}`)
    console.log(resp.data)
    setSpell(resp.data)
    setCastClass(resp.data.classes)
    setSpellComponents(resp.data.components)
  }

  //poll api on page load
  useEffect(() => {
    getSpell()
  }, [index])

  //render
  if (!spell) {
    return <div>Loading...</div>
  } else if (!castClass) {
    return <div>Loading...</div>
  } else if (!spellComponents) {
    return <div>Loading...</div>
  } else {
    //set var for value of concentration
    let concentrationValue = ''
    if (spell.concentration === true) {
      concentrationValue = 'Yes'
    } else {
      concentrationValue = 'No'
    }
    //set var for value of ritual
    let ritualValue = ''
    if (spell.ritual === true) {
      ritualValue = 'Yes'
    } else {
      ritualValue = 'No'
    }
    //set var for value of higher_level
    let higherLevelValue = ''
    if (!spell.higher_level) {
      higherLevelValue = 'Not Applicable'
    } else {
      higherLevelValue = spell.higher_level
    }
    //set var for material component
    let materialValue = ''
    if (!spell.material) {
      materialValue = 'Not Applicable'
    } else {
      materialValue = spell.material
    }

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
          Cast As Ritual: <span>{ritualValue}</span>
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
          {spellComponents.map((spellComponent) => (
            <li>{spellComponent}</li>
          ))}
        </h5>
        <h5>
          Material: <span>{materialValue}</span>
        </h5>
        <h5>Classes Which Can Cast:</h5>
        {castClass.map((classes) => {
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
}

export default SpellDetails
