import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import classes from "../components/Card.module.css"

function TeamDetails ({match}) {
    useEffect(() => {
        fetchTeamInfo()
    }, [])

    const [teamInfo, setTeamInfo] = useState([], () => {
        const localData = localStorage.getItem('teamInfo')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('teamInfo', JSON.stringify(teamInfo));
    }, [teamInfo])

    const fetchTeamInfo = async () => {
        const fetchTeamInfo = await  fetch(
            `https://www.balldontlie.io/api/v1/teams/${match.params.id}`
        )
        const teamInfo =  await fetchTeamInfo.json()
        setTeamInfo(teamInfo)
    }
    return(
        <div className={classes.card}>
            <Link to="/">
                <img className={classes.logo} src={Logo} />
            </Link>
            <h1 className={classes.orange}>{teamInfo.name}</h1>
            <p>Full name: <span className={classes.black}>{teamInfo.full_name}</span></p>
            <p>City: <span className={classes.black}>{teamInfo.city}</span></p>
            <p>Abbreviation: <span className={classes.black}>"{teamInfo.abbreviation}</span>"</p>
            <p>Division: <span className={classes.black}>{teamInfo.division}</span></p>
            <p>Conference: <span className={classes.black}>{teamInfo.conference}</span></p>
        </div>
    )
}

export default TeamDetails
