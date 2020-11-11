import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from '../logo.png'

const GameDetails = ({match}) => {  
    const [gameDetails, setGameDetails] = useState()

    const getGameDetails = async () => {
        const res = await fetch(`https://www.balldontlie.io/api/v1/games/${match.params.id}`)
        const gameInfo = await res.json()
        setGameDetails(gameInfo)
    }
    useEffect(() => {
        getGameDetails()
    }, []) 

    return(
        <div>
            {gameDetails ? (<div className="card">
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo" />
                </Link>
                <h3>{gameDetails.season +" "+ gameDetails.status}</h3>
                <p >Date: ( { gameDetails.date } )</p>
                <h5>{gameDetails.home_team.full_name + " vs " + gameDetails.visitor_team.full_name}</h5>
                <h4>{gameDetails.home_team_score + " : " + gameDetails.visitor_team_score}</h4>
            </div>) : (<div className="spinner"></div>) }
        </div>
    )
}

export default GameDetails
