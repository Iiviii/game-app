import React, { Component } from 'react'
import axios from 'axios'
import GameCard from "./GameCard"

class Games extends Component {
    constructor() {
        super()
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        axios.get(`https://www.balldontlie.io/api/v1/games`)
        .then(res => {
            this.setState({games: res.data.data})
        })
    }
    
    render() {
        const GamesList = this.state.games.map(game => <GameCard game={game} />)
        return (
            <div key={GamesList.id}>
                { GamesList.slice(0, 10)}
            </div>
        )
    }
}

export default Games