import React from 'react'
import { Link } from "react-router-dom"

const GameCard = ({ game }) => {
  return (
    <div className="card">
      <h3>{ game.season +" "+ game.status }</h3>
      <p>Date: ( { game.date } )</p>
      <Link to={`/teamdetails/${game.home_team.id}`}>{game.home_team.full_name}</Link>
      <Link to={`/gamedetails/${game.id}`}> {game.home_team_score}(scores)</Link><br />
      <Link to={`/teamdetails/${game.visitor_team.id}`}>{game.visitor_team.full_name}</Link>
      <Link to={`/gamedetails/${game.id}`}> {game.visitor_team_score}(scores)</Link>
    </div>
  )
}

export default GameCard
