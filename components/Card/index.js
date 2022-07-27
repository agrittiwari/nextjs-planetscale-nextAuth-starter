import React from 'react'
import Style from './Card.module.css'
const Card = ({val}) => {
    const {event} = val
  return (
    <div className={Style.mainDiv}>
        <h2>{event}</h2>
    </div>
  )
}

export default Card