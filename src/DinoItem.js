import { useState } from 'react'

const DinoItem = (props) => {

  const { id, image, name } = props.item
  return (
    <div className={"card " + (props.gameOver ? "disable" : "")} key={id} onClick={() => props.handleClick(id)}>
    <img src={image} alt="Avatar" style={{width: '100%'}}/>
     <div className="container">
      <h4><b>{name}</b></h4> 
      </div>
  </div>
  )
}

export default DinoItem