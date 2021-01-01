// **********************************************************************************************
// giving Colors to squares
var colors = giveColorRandom(6);
console.log(colors);
var squares = document.querySelectorAll(".square");

// *********************************************************************************    
// message to be printed
var messageDisp = document.querySelector("#message");

for(var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];


    // ******************************************************************************
    // hit event on clicking the square..;./.....;...........................
    squares[i].addEventListener("click", function() {
        if(this.style.backgroundColor !== pickedColor) {
            this.style.backgroundColor = "black";
            messageDisp.textContent = "TryAgain!"
            // this.classList.add("wrongSelected");
        } else {
            messageDisp.textContent= "Correct!";
            changeColors();
            giveHColor();
            newColors.textContent = "Play Again!";
            
        }
    });
}
var h1 = document.querySelector("h1");
function giveHColor() {
    
    h1.style.background = pickedColor;
}

function changeColors() {
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

// ******************************************************************************
// logic behind picked color
var pickedColor = pickColorRandom(6);
var pickedColorDisp = document.getElementById("pickedColor");
pickedColorDisp.textContent = pickedColor;



// **********************************************************************************
// Button New Colors!
var newColors = document.querySelector("#reset");
newColors.addEventListener("click", function() {
    reset();
});

function reset() {
        var nSquares = 6;
        if(easyBtn.classList.length > 0) {
            nSquares = 3;
        }
        colors = giveColorRandom(nSquares);
        pickedColor = pickColorRandom(nSquares);
        pickedColorDisp.textContent = pickedColor;
        for(var i=0; i<nSquares; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
        h1.style.background = "rgb(61, 17, 61)";
        messageDisp.textContent = "";
        newColors.textContent = "New Colors";
}





function pickColorRandom(number) {
    var random = Math.floor(Math.random()*number);
    console.log(random);
    return  colors[random];
}

function giveColorRandom(numbers) {
    colors = []
    
    for (var i=0; i<numbers; i++) {
        var r = Math.floor(Math.random()*255+1);
        var g = Math.floor(Math.random()*255+1);
        var b = Math.floor(Math.random()*255+1);
        var color = "rgb(";
        color += r + ", " + g + ", " + b + ")";
        colors.push(color);
    }
    return(colors);
}


var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
    this.classList.add("selected");
    hardBtn.classList.remove("selected");

    colors = giveColorRandom(3);
    pickedColor = pickColorRandom(3);
    pickedColorDisp.textContent = pickedColor;
    reset();
    for(var i=3; i<squares.length; i++){
        squares[i].style.display = "none";
    }
});

hardBtn.addEventListener("click", function() {
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    reset();
    for(var i=3; i<squares.length; i++){
        squares[i].style.display = "block";
    }
});
