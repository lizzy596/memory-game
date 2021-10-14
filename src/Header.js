import React from 'react'

const Header = (props) => {
  return (
    <div className="title">
      <h1>Dinosaur Memory Game</h1>
      <h3>Click Each Dinosaur Photo----but only once!!</h3>

      <div className="score">
        <h1>Score: {props.currentScore} </h1>
        <h1>HighScore: {props.highScore} </h1>
      </div>

      <button className="btn" onClick={() => props.handleRestart()}> Restart</button>

    </div>
  )
}

export default Header