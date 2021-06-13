import React from "react"
import About from "./About"

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github}>Github Link </a>
            <a href={props.linkedin}>Linkedin Link </a>
          
        </div>
    )
}

export default Links;