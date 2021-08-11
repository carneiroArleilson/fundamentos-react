/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './Card.css'

export default props =>
    <div className="Card">
        <div className="Content">
            {props.children} {/*props.children se refere ao que tem tem dentro popr ierarquia elemento filho no caso "conteudo" */}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>