import React from 'react'

import './GolfList.css'
import Golf from './Golf'

const GolfList = (props) => {
  return(
    <ul className="GolfList">
      {
        Object
          .keys(props.courses)
          .map(golfId => <Golf golf={props.courses[golfId]} key={golfId}/>)
      }
    </ul>
  )
}

export default GolfList