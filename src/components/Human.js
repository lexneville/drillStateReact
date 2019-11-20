import React from 'react'
import Man from './Man'

export default function Human(props) {
    return (
        <div>
            <h1>A human has 2 {props.humanBodyPart}</h1>
            <Man manBodyPart={props.humanBodyPart}/>
        </div>
    )
}
