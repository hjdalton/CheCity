function changeText() {
  document.getElementsByClassName('bookButton').value = "Fully Booked";
  console.log("test") 
}

let allspaces = document.querySelectorAll(".spaces");

allspaces.forEach(function myFunction(item) {
  if(item.value === "0") {
    changeText()
    console.log("changing names")
  }
});




// input.parentElement.removeChild(input);

  // // var h1 = document.createElement("H1"); // Create the H1 element 
  // var h1Text = document.createTextNode("Your H1 text"); // Create a text element
  // h1.appendChild(h1Text); // Append the text node to the H1 element document.getElementById('book').appendChild(h1);
  
  // document.getElementById('book-game-form').appendChild(h1);




