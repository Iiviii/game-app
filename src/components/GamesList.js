import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'
import styled from 'styled-components'

export const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-top: 30vh;
    :after{
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid #ff7f50;
        border-color: #ff7f50 transparent #ff7f50 transparent;
        animation: spinner 1.2s infinite;
    }
    @keyframes spinner {
        0% {
            transform: rotate(0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
            transform: rotate(900deg);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
            transform: rotate(1800deg);
        }
    }
`

const GamesList = () => {
    const [loading, setLoading] = useState(false)
    const [games, setGames] = useState([])


    useEffect(()=>{
        getGames()
    }, [])

    const getGames = async () => {
        setLoading(true)
        const res = await fetch(`https://www.balldontlie.io/api/v1/games`)
        const data = await res.json()
        setGames(data.data)
        setLoading(false)
    }
    const Games = games.map(game => <GameCard key={game.id} game={game} />)
    return (
        <div>
            {loading ? (<Spinner />) : Games.slice(0, 10) }
        </div>
    )
}

export default GamesList
