import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LS = {}

LS.Links = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #ff8940;
  transition-duration: 0.7s;
  :hover {
    opacity: 0.7;
  }
`

export const Card = styled.div`
  max-width: 600px;
  margin: 10px auto 30px auto;
  box-shadow: 0 5px 10px #888;
  padding: 20px 10px 50px 10px;
  text-align: center;
  border-radius: 20px;
  background-color: #fff;
  transition-duration: 0.4s;
  color: #ffcd57;
  transition-duration: 0.3s;
  :hover {
    transform: scale(1.02);
  }
`
export const Dflex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
export const Title = styled.h1`
  font-size: 25px;
  color: #ff4d00;
`

const GameCard = ({ game }) => {
  return (
    <Card>
      <Title>
        {game.season} {game.status}
      </Title>
      <p>Date: ( {game.date} )</p>
      <Dflex>
        <div>
          <h3>Home Team</h3>
          <LS.Links to={`/teamdetails/${game.home_team.id}`}>
            {game.home_team.full_name}
          </LS.Links>
          <br />
          <LS.Links to={`/gamedetails/${game.id}`}>
            {game.home_team_score}(scores)
          </LS.Links>
        </div>
        <div>
          <h3>Visitor Team</h3>
          <LS.Links to={`/teamdetails/${game.visitor_team.id}`}>
            {game.visitor_team.full_name}
          </LS.Links>
          <br />
          <LS.Links to={`/gamedetails/${game.id}`}>
            {game.visitor_team_score}(scores)
          </LS.Links>
        </div>
      </Dflex>
    </Card>
  )
}

export default GameCard
