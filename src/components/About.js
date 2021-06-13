import React from "react";
import user from "../data/user";
import Links from "./Links"

function About(props) {
  console.log(user.links)

  function bioLetter(){
    if(props.bio != ""  || props.bio){
      return (
        <p>{props.bio}</p>
      )
    }
    else {
      return ""
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioLetter()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links />
    </div>
  );
}

export default About;
