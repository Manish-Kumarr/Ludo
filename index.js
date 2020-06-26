document.getElementById("btn2").disabled = true;
document.getElementById("btn2").style.background = "Grey";
document.getElementById("btn2").innerHTML = "Wait";
var arr1 = [];
var arr2 = [];
const player1 = () => {
  document.getElementById("btn2").innerHTML = "Play";
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn2").style.background = "sienna";
  document.getElementById("btn1").innerHTML = "Wait";
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn1").style.background = "Grey";
  var player1 = document.getElementById("player1");
  var dicenumber1 = Math.floor(Math.random() * 6) + 1;
  var imgchange = `assets/dice${dicenumber1}.png`;
  player1.setAttribute("src", imgchange);
  arr1.push(dicenumber1);
  var add1 = 0;
  for (var i = 0; i < arr1.length; i++) {
    var add1 = arr1[i] + add1;
  }

  if (dicenumber1 == 1) {
    add1 = add1 - 10;
    document.getElementById("change-score1").innerHTML = add1;
    arr1.splice(0, arr1.length);
    arr1.push(add1);
  } else {
    document.getElementById("change-score1").innerHTML = add1;
  }

  if (add1 >= 100) {
    document.getElementById("won").style.display = "block";
    document.getElementById("won").innerHTML = "Player 1 won";
    restart();
  } else {
    document.getElementById("won").style.display = "none";
  }
};

const player2 = () => {
  document.getElementById("btn1").innerHTML = "Play";
  document.getElementById("btn2").innerHTML = "Wait";
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn1").style.background = "sienna";
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn2").style.background = "Grey";
  var player1 = document.getElementById("player2");
  var dicenumber2 = Math.floor(Math.random() * 6) + 1;
  var imgchange = `assets/dice${dicenumber2}.png`;
  player1.setAttribute("src", imgchange);
  arr2.push(dicenumber2);
  var add2 = 0;
  for (var i = 0; i < arr2.length; i++) {
    var add2 = arr2[i] + add2;
  }

  if (dicenumber2 == 1) {
    add2 = add2 - 10;
    document.getElementById("change-score2").innerHTML = add2;
    arr2.splice(0, arr2.length);
    arr2.push(add2);
  } else {
    document.getElementById("change-score2").innerHTML = add2;
  }

  if (add2 >= 100) {
    document.getElementById("won").style.display = "block";
    document.getElementById("won").innerHTML = "Player 2 won";
    restart();
  } else {
    document.getElementById("won").style.display = "none";
  }
};

restart = () => {
  arr1.splice(0, arr1.length);
  arr2.splice(0, arr2.length);
  document.getElementById("change-score1").innerHTML = 0;
  document.getElementById("change-score2").innerHTML = 0;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn1").innerHTML = "Play";
  document.getElementById("btn2").innerHTML = "Wait";
  document.getElementById("btn1").style.background = "sienna";
  document.getElementById("btn2").style.background = "Grey";
};
reset = () => {
  arr1.splice(0, arr1.length);
  arr2.splice(0, arr2.length);
  document.getElementById("change-score1").innerHTML = 0;
  document.getElementById("change-score2").innerHTML = 0;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn1").innerHTML = "Play";
  document.getElementById("btn2").innerHTML = "Wait";
  document.getElementById("btn1").style.background = "sienna";
  document.getElementById("btn2").style.background = "Grey";
  document.getElementById("won").style.display = "none";
};

// TEXT

var test = document.getElementById("test");

var text = "Welcome to LUDO"; //put your text here
var result = "";
//Press rerun button to see effect
window.addEventListener("load", (event) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      result += text[i];
      test.innerHTML = result;
    }, 120 * i);
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close = document.getElementById("close");

// When the user clicks the button, open the modal

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
