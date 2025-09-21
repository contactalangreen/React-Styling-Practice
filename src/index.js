//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const chosenColor = {
  color: "",
};

function getGreeting() {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);

  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Night";
  }
}

function getColor(pickedGreeting) {
  if (pickedGreeting === "Good Morning") {
    chosenColor.color = "red";
  } else if (pickedGreeting === "Good Afternoon") {
    chosenColor.color = "green";
  } else if (pickedGreeting === "Good Night") {
    chosenColor.color = "blue";
  }
}
const pickedGreeting = getGreeting();
getColor(pickedGreeting);

ReactDOM.render(
  <h1 className="heading" style={chosenColor}>
    {pickedGreeting}
  </h1>,
  document.getElementById("root")
);
