function disableButton() {
  let buttons = document.getElementsByClassName('bookButton');
  let spaces = document.getElementsByClassName('spaces'); 

  
  for (i = 0; i < (spaces.length); i++) {
    if (spaces[i].value === '0') {
      buttons[i].disabled = true;    
    } else {
      buttons[i].disabled = false;
    }
  }
} 

disableButton()


