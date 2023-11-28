window.onload=function(){

var myElement = document.getElementById("square-one");
var triggerbutton =  document.getElementById("button1");

triggerbutton.addEventListener("click", function()
{
    myElement.classList.add("clicked");
    
});

myElement.addEventListener("transitionend", function() 
{
    myElement.classList.remove("clicked");
  });

}