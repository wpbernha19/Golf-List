import React from 'react'

import './Golf.css'

const Golf = ({golf}) => {
  return(
    <li className="Golf">
      <input type="checkbox" value="on" />
      <div className="details">
        <div className="name">
          {golf.name}
        </div>
        <span className="actions">
          <button className="remove">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </div>
    </li>
  )
}

export default Golf