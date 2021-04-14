// Your code here

let dodger = document.getElementById("dodger");
function moveDodgerLeft(){
document.addEventListener("keydown", function(e){
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10);
    if(left>0){dodger.style.left = `${left -1}px`;}
  }
});
}

function moveDodgerRight(){
document.addEventListener("keydown", function(e){
  if (e.key === "ArrowRight") {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10);
    if(left<360){dodger.style.left = `${left +1}px`;}
  }
});

}