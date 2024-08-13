import React from "react"

export default function Square(props){
    return (
        <div
        onClick={props.onClick}
          className= {`square ${props.box}`}>
            <h5>{props.value}</h5>
        </div>
    )
}