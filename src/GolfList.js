import React from 'react'

import './GolfList.css'
import Golf from './Golf'

const GolfList = (props) => {
  return(
    <ul className="GolfList">
      {
        Object
          .keys(props.golfs)
          .map(golfId => <Golf golf={props.golfs[golfId]} key={golfId}/>)
      }
    </ul>
  )
}

export default GolfList