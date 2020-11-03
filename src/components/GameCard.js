import React, { Component } from 'react'
import { Link } from "react-router-dom"
import classes from "../components/Card.module.css"

class GameCard extends Component {
  render() {
    return (
      <div key={this.props.game.id} className={classes.card}>
        <h3 className={classes.title}>{this.props.game.season +" "+ this.props.game.status}</h3>
        <p className={classes.date}>Date: {'('+ this.props.game.date + ')'}</p>
        <div className={classes.position}>
          <div>
            <p className={classes.team}>Home Team</p>
            <h4 key={this.props.game.home_team.id}>
              <Link className={classes.name} to={`/teamdetails/${this.props.game.home_team.id}`}>{this.props.game.home_team.full_name}</Link>
            </h4>
            <p key={this.props.game.home_team_score}>
              <Link className={classes.team} to={`/gamedetails/${this.props.game.id}`}>{this.props.game.home_team_score}(scores)</Link>
            </p>
          </div>
          <div>
            <p className={classes.team}>Visitor Team</p>
            <h4 key={this.props.game.visitor_team.id}>
              <Link className={classes.name} to={`/teamdetails/${this.props.game.visitor_team.id}`}>{this.props.game.visitor_team.full_name}</Link>
            </h4>
            <p key={this.props.game.visitor_team_score}>
              <Link className={classes.team} to={`/gamedetails/${this.props.game.id}`}>{this.props.game.visitor_team_score}(scores)</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default GameCard