window.onload = function() {
    document.getElementById("button1").onclick = showNum;
    document.getElementById("button2").onclick = showNum;
    document.getElementById("button3").onclick = showNum;
}
  
function showNum() {
    alert("value " +this.value); 
}