var btn = document.querySelectorAll(".drum");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {

        var buttonPressed = this.textContent;
        letterButton(buttonPressed);
        buttonAnimation(buttonPressed);

    })

    document.addEventListener("keyup", function(e) {

        letterButton(e.key);
        buttonAnimation(e.key);
    })
}


function letterButton(eitherKeyorMouse) {

    switch (eitherKeyorMouse) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
        default:
            console.log("wrongButton")
            break;
    }
}

function buttonAnimation (animateBtn) {
	 
	 var btnAnim = document.querySelector("." + animateBtn);
	 btnAnim.classList.add("pressed");
	 setTimeout(function () {
	 btnAnim.classList.remove("pressed");
	 }, 100)
}