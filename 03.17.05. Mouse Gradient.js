//03.17.05. abe Mouse Gradient
function attatchgradientEvents () {
    
 let theGradient = document.getElementById("gradient");
let theResult = document.getElementById("result");

theGradient.addEventListener("click", function(event)) {
    var x = event.pageX - this.offsetLeft;
    theResult.innerText = Math.floor((x / 300 * 100).toFixed(0) + "%";
    });
}
