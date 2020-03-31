import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CastClass from '../components/CastClass'

const SpellDetails = (props) => {
  const index = props.match.params.index
  //set var based on data passed from clicking on individual spell
  const [spell, setSpell] = useState()
  const [castClass, setCastClass] = useState()

  //set var for base api url
  const baseURL = 'http://www.dnd5eapi.co/api/spells/'

  //poll api for individual spell data
  const getSpell = async () => {
    const resp = await axios.get(`${baseURL}${index}`)
    console.log(resp.data)
    setSpell(resp.data)
    setCastClass(resp.data.classes)
  }

  //poll api on page load
  useEffect(() => {
    getSpell()
  }, [index])

  //render
  if (!spell && !castClass) {
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
    const classArr = castClass
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
          Cast at Higher Level: <span>{spell.higher_level}</span>
        </h5>
        <h5>Classes Which Can Cast:</h5>
        {classArr.map((castClass) => {
          return (
            <>
              <CastClass
                key={castClass.name}
                name={castClass.name}
                url={castClass.url}
              />
            </>
          )
        })}
      </div>
    )
  }
}

export default SpellDetails
