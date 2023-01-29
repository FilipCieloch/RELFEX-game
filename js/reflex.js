function showTime() {
  document.body.querySelector('#currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
  showTime();
}, 1000);

//function that returns a random int number form a given range
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
/*
//fuction that sets fill to green for an object for 2 seconds 
function highlightRectangle() {
  document.body.querySelector("#points").children[1].innerHTML = "Points: " + score;
  let object = document.querySelector("#game-field").children[randomIntFromRange(0, 24)];
  let noFill = object.style.fill = "white";
  object.style.fill = 'green';
  console.log(object);
  let counter = 0;

  let toggle = false;
  function toggleFill() {
    object.style.fill = toggle ? 'white' : 'green';
    rectangleClicked = true;
    toggle = !toggle;
  }

  object.addEventListener('click',
    toggleFill,
    false
  );
/*
  object.addEventListener('mouseover', () => {
    object.removeEventListener('click',
      toggleFill,
      false
    );
  });
  */
/* object.addEventListener("click", function () {
   //object.style.fill = 'red';
   object.style.fill = noFill;
   score++;
   rectangleClicked = true;
  // object.removeEventListener("click", function () { score++;})
 })*/
/*
  if (!twoSecTimeout) {
    twoSecTimeout = setTimeout(() => {
    //jeśli kwadrat był kliknięty => cleartimeout
    object.style.fill = 'white';
    counter++;
      if (counter >= 1) {
        object.removeEventListener("click", toggleFill);
        //clearTimeout(twoSecTimeout);
        score++;
      }
      
    }, 2000);
  }
  
}*/

//fuction that sets fill to green for an object for 2 seconds 
function highlightRectangle() {
  document.body.querySelector("#points").children[1].innerHTML = "Points: " + score;
  document.body.querySelector("#lives").children[1].innerHTML = "Lives: " + remainingLives;
  let object = document.querySelector("#game-field").children[randomIntFromRange(0, 24)];
  let noFill = object.style.fill = "white";
  object.style.fill = 'rgb(240, 79, 4)';
  //object.style.stroke = 'black';
  object.style.strokeWidth = '2.5';
  console.log(object);

  const once = {
    once: true
  };

  twoSecTimeout = setTimeout(() => {
    object.style.fill = 'rgb(218, 218, 218)';
    object.style.strokeWidth = '2';
    
  }, 2000);

  object.addEventListener("click", addPoint, once);
  
  
  function addPoint() {
    score++;
    clearTimeout(twoSecTimeout);
    object.style.fill = 'rgb(218, 218, 218)';
    object.style.strokeWidth = '2';
    //object.removeEventListener("click", addPoint)
  }

  function lostPoint() {
    score--;
    remainingLives--;
    if (remainingLives <= 0) {
      alert('no more lives');
      resetGame();
    }
  }
}



//repeat function for a given number of seconds
function repeatAction(seconds, action) {
  // check if an interval has already been set up
  if (!intervalAction) {
    intervalAction = setInterval(function () {
      seconds -= 2;
      if (seconds >= 0) {
        action();
      }
      if (seconds === 0) {
        clearInterval(seconds);
        resetGame();
      }
    }, 2000);
  }
};

function setTimerRed(seconds) {
  // check if an interval has already been set up
  if(!intervalTimerRed) {
    intervalTimerRed = setInterval(function () {
      seconds -= 1;
      if (seconds < 55) {
        document.body.querySelector("#countdown").style.fill = "red";
      }
    }, 1000);
  }
};

function startGame() {
  repeatAction(seconds, highlightRectangle);
  countdown(seconds);
  setTimerRed(seconds);
  //startButton.style.fill = "green";
  startButton.removeEventListener("click", startGame);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  score = 0;
  remainingLives = 3;
  clearInterval(intervalAction);
  clearInterval(intervalTime);
  intervalAction = null;
  intervalTime = null;
  intervalTimerRed = null;
  resetButton.removeEventListener("click", resetGame);
  startButton.addEventListener("click", startGame);
  timer.innerHTML = seconds;
  document.body.querySelector("#points").children[1].innerHTML = "Points: " + score;
  document.body.querySelector("#lives").children[1].innerHTML = "Lives: " + remainingLives;
}



let score = 0;
let remainingLives = 3;
let seconds = 60;
let intervalAction;
let intervalTime;
let intervalTimerRed;
let twoSecTimeout;
let rectangleClicked = false;

const timer = document.body.querySelector("#countdown");
const lives = document.body.querySelector("#lives").children[1].innerHTML = "Lives: " + remainingLives;
const points = document.body.querySelector("#points").children[1].innerHTML = "Points: " + score;
const startButton = document.body.querySelector("#start-button");
const resetButton = document.body.querySelector("#reset-button");

function countdown(seconds) {
  // check if an interval has already been set up
  if (!intervalTime) {
    intervalTime = setInterval(function () {
      seconds--;
      if (seconds >= 0) {
        timer.innerHTML = seconds;
      }
      if (seconds === 0) {
        alert('out of time');
        clearInterval(seconds);
      }
    }, 1000);
  }
};

startButton.addEventListener("click", startGame);




