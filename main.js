var text = document.getElementById("text");
var button = document.getElementById("custom-button");

button.addEventListener("mouseover",onHover);
button.addEventListener("click" ,onClick);
button.addEventListener("mouseout",onHoverOut)
function onClick(){
text.style.setProperty("color","red")
}
function onHover(){
    button.style.setProperty("background-color","blue");
}
function onHoverOut(){
    button.style.setProperty("background-color","red");
}