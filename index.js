/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  timeString = parseInt(timeString)
  if (timeString >= 0 && timeString < 12) {
    return "Good Morning";
  } else if (timeString < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}
