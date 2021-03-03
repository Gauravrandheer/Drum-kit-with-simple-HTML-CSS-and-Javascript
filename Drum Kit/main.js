document.addEventListener("keydown", soundstart);
const keys = document.querySelectorAll(".key")
keys.forEach(key=> {
  key.addEventListener("transitionend",removetransition);
});

function removetransition(event){
  if(event.propertyName!="transform")return;

  this.classList.remove("playing");
}

function soundstart(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

  if(!audio){
    return;
  }
  audio.currenttime=0;
  audio.play();
  key.classList.add("playing");
}
