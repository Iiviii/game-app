import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Logo from '../logo.png'

const TeamDetails = ({match}) => {
    const [teamDetails, setTeamInfo] = useState()

    useEffect(()=>{
        getTeam()
    }, [])

    const getTeam = async () => {
        const res = await fetch(`https://www.balldontlie.io/api/v1/teams/${match.params.id}`)
        const teamInfo = await res.json()
        setTeamInfo(teamInfo)
    }

  return (
    <div>
        {teamDetails ? (<div className="card">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <h1>{teamDetails.name}</h1>
        <p>Full name: <span>{teamDetails.full_name}</span></p>
        <p>City: <span>{teamDetails.city}</span></p>
        <p>Abbreviation: <span>"{teamDetails.abbreviation}</span>"</p>
        <p>Division: <span>{teamDetails.division}</span></p>
        <p>Conference: <span>{teamDetails.conference}</span></p>
        </div>) : (<div className="spinner"></div>) }
    </div>
  )
}

export default TeamDetails