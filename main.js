let mainClass = document.getElementsByClassName("seoul");
window.addEventListener('scroll', function(){
  let value = window,scorllY;
  console.log("scrollY", value);

  if(value>700){
    mainClass.style.animation='disappear 1s ease-out forwards';
     
  }
});