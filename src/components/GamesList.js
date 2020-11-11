import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'

const GamesList = () => {
    const [loading, setLoading] = useState(false)
    const [games, setGames] = useState([], () => {
        const localData = localStorage.getItem('games')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games));
    }, [games])
    

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
            {loading ? (<div className="spinner"></div>) : Games.slice(0, 10) }
        </div>
    )
}

export default GamesList
