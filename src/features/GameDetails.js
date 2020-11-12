import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from '../logo.png'
import {Spinner} from '../components/GamesList'
import {Card, Title, Dflex} from '../components/GameCard'
import {ImportantInfoColor, LogoLink} from './TeamDetails'

const GameDetails = ({match}) => {  
    const [gameDetails, setGameDetails] = useState()

    useEffect(async() => {
        const res = await fetch(`https://www.balldontlie.io/api/v1/games/${match.params.id}`)
        const gameInfo = await res.json()
        setGameDetails(gameInfo)
    }, [match.params]) 

    const getData = () => {
        const localData = localStorage.getItem('gameDetails')
        return localData ? JSON.parse(localData) : []
      }
      useEffect(() => {
        getData()
        if(gameDetails){
          localStorage.setItem('gameDetails', JSON.stringify(gameDetails));
        }
    }, [gameDetails])

    return(
        <div>
            {gameDetails ? (<Card>
                <Link to="/">
                    <LogoLink className="logo" src={Logo} alt="logo" />
                </Link>
                <h2>{gameDetails.season} {gameDetails.status}</h2>
                <p >Date: ( { gameDetails.date } )</p>
                <Dflex>
                    <Title>{gameDetails.home_team.full_name}</Title>
                    <p>vs</p>
                    <Title>{gameDetails.visitor_team.full_name}</Title>
                </Dflex>
                <Dflex>
                    <ImportantInfoColor>{gameDetails.home_team_score}</ImportantInfoColor>
                    <ImportantInfoColor>{gameDetails.visitor_team_score}</ImportantInfoColor>
                </Dflex>
            </Card>) : (<Spinner />) }
        </div>
    )
}

export default GameDetails
