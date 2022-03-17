document.querySelector(".love-button").addEventListener("click", love, true);


var prediction = ["This will take some work, but it is worth it!", "This relationship is uphill both ways!", "This is a case of opposites -- you will have some work to do!", "Was their pickup line, 'Do you believe in love at first sight? Or should I walk by again?'", "'It's complicated' might describe you two."];

var posPrediction = ["Your love is meant to be!", "You go together like peanut butter and jelly!", "You have met your soul mate!", "You found your person!", "They complete you!", "I see happily ever after for you two!", "Is this love meant to be? The answer is 'Hundo P!'"];

var loveImages = ["images/cheers.png", "images/falling-in-love.png", "images/eyewear.png", "images/give-love.png", "images/heart-face.png", "images/hug.png", "images/in-love.png", "images/love-birds.png", "images/love-letter.png"];

var struggleImages = ["images/asking.png", "images/dissapointment.png", "images/question.png", "images/roadwork.png", "images/worker.png", "images/frustration.png", "images/annoying.png", "images/roller-coaster.png"];

function love() {
  var yourName = document.getElementById("yourName").value;
  var lovesName = document.getElementById("lovesName").value;
 
  if (yourName.length < 2 || lovesName.length < 2) {
    alert ("Try again. Your names must be at least 2 characters in length!");

  } else if (yourName === "Kristine" && lovesName === "Elsa") {

    document.querySelector(".predictionText").innerHTML = "Your love score is 100%! Incredible!";

  } else if (yourName === "Elsa" && lovesName === "Kristine") {

    document.querySelector(".predictionText").innerHTML = "Your love score is 100%! Legendary!";
    
  } else if (yourName === "Kristin" && lovesName === "Jess") {

    document.querySelector(".predictionText").innerHTML = "Your love score is 100%! Amazing!";

  } else if (yourName === "Jess" && lovesName === "Kristin") {

    document.querySelector(".predictionText").innerHTML = "Your love score is 100%! Wowza!";

  } else {
    var loveScore = Math.floor(Math.random() *100) + 1;
    
    document.querySelector(".predictionText").innerHTML = "Your love score is " + loveScore + "%";
  }

  if (loveScore <= 50) {
  
    var predictionBad = prediction[Math.floor(Math.random() * prediction.length)];
        
    document.querySelector(".predictionText2").innerHTML = predictionBad;

    var strugglePic = struggleImages[Math.floor(Math.random() * struggleImages.length)];

    document.getElementById("changeOnButtonClick").src = strugglePic;
  
  } else {
    
      var predictionGood = posPrediction[Math.floor(Math.random() * posPrediction.length)];
          
      document.querySelector(".predictionText2").innerHTML = predictionGood;

      var happyPic = loveImages[Math.floor(Math.random() * loveImages.length)];

      document.getElementById("changeOnButtonClick").src = happyPic;
        
  }              

}      




  












