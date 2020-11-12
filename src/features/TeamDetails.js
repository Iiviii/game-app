import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Logo from '../logo.png'
import styled from 'styled-components'
import {Spinner} from '../components/GamesList'
import {Card, Title} from '../components/GameCard'

export const ImportantInfoColor = styled.span`
  color: #ff8940;
  font-size: 18px;
`

export const LogoLink = styled.img`
  width: 70px;
`

const TeamDetails = ({match}) => {
    const [teamDetails, setTeamInfo] = useState()

    useEffect(()=>{
        getTeam()
    }, [])
    
    const saveData = () => {
      const localData = localStorage.getItem('teamDetails')
      return localData ? JSON.parse(localData) : []
    }
    useEffect(() => {
      saveData()
      if(teamDetails){
        localStorage.setItem('teamDetails', JSON.stringify(teamDetails));
      }
  }, [teamDetails])

    const getTeam = async () => {
        const res = await fetch(`https://www.balldontlie.io/api/v1/teams/${match.params.id}`)
        const teamInfo = await res.json()
        setTeamInfo(teamInfo)
    }

  return (
    <div>
        {teamDetails ? (<Card>
        <Link to="/">
          <LogoLink className="logo" src={Logo} alt="logo" />
        </Link>
        <Title>{teamDetails.name}</Title>
        <p>Full name: <ImportantInfoColor>{teamDetails.full_name}</ImportantInfoColor></p>
        <p>City: <ImportantInfoColor>{teamDetails.city}</ImportantInfoColor></p>
        <p>Abbreviation: <ImportantInfoColor>"{teamDetails.abbreviation}</ImportantInfoColor>"</p>
        <p>Division: <ImportantInfoColor>{teamDetails.division}</ImportantInfoColor></p>
        <p>Conference: <ImportantInfoColor>{teamDetails.conference}</ImportantInfoColor></p>
        </Card>) : (<Spinner />) }
    </div>
  )
}

export default TeamDetails