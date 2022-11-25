var drumButtons = document.querySelectorAll(".drum");


//detect button press
for(i=0;i<drumButtons.length;i++){
  drumButtons[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
   
  });

   
   }
   //detect keyboard press
   document.addEventListener("keypress", function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
   })
   //make the sound based on which keyboard key is pressed
  function makeSound(key){
    switch (key) {
      case "w":
        
        mySound = new Audio('sounds/crash.mp3');
        mySound.play();
        break;
      case "a":
        mySound = new Audio('sounds/kick-bass.mp3');
        mySound.play();
        break;
      case "s":
      mySound = new Audio('sounds/snare.mp3');
      mySound.play();
      break;
      case "d":
      mySound = new Audio('sounds/tom-1.mp3');
      mySound.play();
      break;
      case "j":
      mySound = new Audio('sounds/tom-2.mp3');
      mySound.play();
      break;
      case "k":
      mySound = new Audio('sounds/tom-3.mp3');
      mySound.play();
      break;
      case "l":
      mySound = new Audio('sounds/tom-4.mp3');
      mySound.play();
      break;
  
  
      default:makeSound(buttonInnerHTML);
}
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey)
  var buttonAnimation = activeButton.classList.add("pressed")

  
    setTimeout(function() {
      activeButton.classList.remove("pressed")
    }, 75.5)
}
