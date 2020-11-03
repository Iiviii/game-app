import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import classes from "../components/Card.module.css"

function GameDetails ({match}) {    
    useEffect(() => {
        fetchGameInfo()
    }, [])

    const [gameInfo, setGameInfo] = useState([], () => {
        const localData = localStorage.getItem('gameInfo')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('gameInfo', JSON.stringify(gameInfo));
    }, [gameInfo])

    const fetchGameInfo = async () => {
        const fetchGameInfo = await  fetch(
            `https://www.balldontlie.io/api/v1/games/${match.params.id}`
        )
        const gameInfo =  await fetchGameInfo.json()
        setGameInfo(gameInfo)
    }
    return(
        <div className={classes.card}>
            <Link to="/">
                <img className={classes.logo} src={Logo} />
            </Link>
            <h3 className={classes.title} key={gameInfo.id}>{gameInfo.season +" "+ gameInfo.status}</h3>
            <p key={gameInfo.date }>Date: {'('+ gameInfo.date + ')'}</p>
            <h5 className={classes.orange}>{gameInfo.home_team + " vs " + gameInfo.visitor_team}</h5>
            <h4 className={classes.team}>{gameInfo.home_team_score + " : " + gameInfo.visitor_team_score}</h4>
        </div>
    )
}

export default GameDetails
