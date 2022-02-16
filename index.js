//document.getElementById("nameP1").innerHTML  = player1;

// document.querySelectorAll("[id='nameP1']").innerHTML  = player1;
// document.querySelectorAll("#nameP1").forEach(
//   function (name){
//     name.innerHTML = player1;
//   }
// )
//
// for(var i=0; i<document.querySelectorAll("#nameP1").length;i++){
//   document.querySelectorAll("#nameP1")[i].innerHTML = player1;
// }
//Player's name
// var player1 = prompt("Name of Player1:");
// document.querySelectorAll("#nameP1").forEach(
//   (name) => name.innerHTML = player1);
//
//
// var player2 = prompt("Name of Player2:");
// //document.getElementById("nameP2").innerHTML  = player2;
// document.querySelectorAll("#nameP2").forEach(
//   (name) => name.innerHTML = player2);

// Create Player
// const player = (name) =>{
//   name = name;
//
// }

//Player's name


//board
const statusDisplay = document.querySelector('.game--status');
var sd = new Audio("Music.mp3");
var mP1 = 0;
var mP2 = 0;
var wonP1Marks = document.querySelector("#player1M");
var wonP2Marks = document.querySelector("#player2M");
var player1Name = "";
var player2Name = "";
var ai = "Computer";
var cell = $('.cell');
let gameActive = true;
// let currentPlayer = "X";
let currentPlayer = "🐢";
var board = new Array();


var sizeOfBoard = 0;
var totalSizeOfBoard = 0;
let gameState = [];
// var winCount;

// const winningMessage = () => ` ${currentPlayer === "X" ? player1Name : player2Name} has won!`;
const winningMessage = () => ` ${currentPlayer === "🐢" ? player1Name : player2Name} has won!`;
const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer === "X" ? player1Name : player2Name}'s turn`;
const currentPlayerTurn = () => `It's ${currentPlayer === "🐢" ? player1Name : player2Name}'s turn`;
// Without Reflect
var form = document.getElementById("myForm");

// Game Detail
function gameDetailFunction() {
  player1Name = player1.value;
  player2Name = player2.value;

  document.querySelectorAll("#nameP1").forEach((name) => name.innerHTML = player1Name);
  document.querySelectorAll("#nameP2").forEach((name) => name.innerHTML = player2Name);

  sizeOfBoard = parseInt($(".board-size option:selected").val());
  totalSizeOfBoard = sizeOfBoard * sizeOfBoard

  for (var i = 0; i < (totalSizeOfBoard); i++) {
    gameState.push("");
    };

  if (document.getElementById('option1').checked) {
    alert('SM radio button is checked');
  } else if (document.getElementById('option2').checked) {
    alert('MM radio button is checked');
  }

}

//FUNCTION CREATE RANDOM NUMBER
function randomNumber() {
  console.log(Math.floor(Math.random() * totalSizeOfBoard))
  return Math.floor(Math.random() * totalSizeOfBoard);
} //end of function

// $(this).text(playerTurn);
//
//     // START AI
//     for (i=0; i < 10; i++) {
//   var random = randomNumber();
// if (buttons[random].innerHTML === "X" || buttons[random].innerHTML === "O") {
//   continue;
// }
//   else {
//    buttons[random].innerHTML = computerTurn;
//    break;
//   }
// } //end of AI

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

statusDisplay.innerHTML = currentPlayerTurn();

// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// function checkWiningCondition(row, col) {
//   let n = sizeOfBoard;
//         //check col
//       for(var i = 0; i < n; i++){
//           if(board[row][i] != board[row][col])
//               break;
//           if(i == n-1){
//               //report win for s
//               console.log("win");
//               var num1 = (row*n);
//               for (let i = 0; i < n; i++) {
//                 document.getElementsByClassName('cell')[num1+i].style.backgroundColor = "#FFDB58";
//               }
//           }
//       }
//
//       //check row
//       for(var i = 0; i < n; i++){
//           if(board[i][col] != board[row][col])
//               break;
//           if(i == n-1){
//               //report win for s
//               console.log("win");
//               num2 = parseInt(col);
//               for (let i = 0; i < n; i++) {
//                 console.log(n);
//                 document.getElementsByClassName('cell')[num2].style.backgroundColor = "#FFDB58";
//                 num2 += n;
//                 console.log(num2);
//               }
//           }
//       }
//
//       //check diag
//       if(row == col){
//           //we're on a diagonal
//           for(var i = 0; i < n; i++){
//               if(board[i][i] != board[row][col])
//                   break;
//               if(i == n-1){
//                   //report win for s
//                   console.log("win");
//                   var num3 = parseInt(0);
//                   var addNumber = parseInt(n+1)
//                   for (let i = 0; i < n; i++) {
//                     console.log(n);
//                     document.getElementsByClassName('cell')[num3].style.backgroundColor = "#FFDB58";
//                     num3 += addNumber;
//                     console.log(num3);
//                   }
//               }
//           }
//       }
//
//       //check antidiag
//       if(row + col == n - 1){
//           for(var i = 0; i < n; i++){
//               if(board[i][(n-1)-i] != board[row][col])
//                   break;
//               if(i == n-1){
//                   //report win for s
//                   console.log("win");
//                   var num4 = parseInt(3);
//                   var minusNumber = parseInt(n-1)
//                   for (let i = 0; i < n; i++) {
//                     document.getElementsByClassName('cell')[num4].style.backgroundColor = "#FFDB58";
//                     num4 += minusNumber;
//                     console.log(num4);
//                   }
//               }
//           }
//       }
//
//       //check draw
//       // if(moveCount == (Math.pow(n, 2) - 1)){
//       //     //report draw
//       // }
//
//
// }

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  // currentPlayer = currentPlayer === "X" ? "O" : "X";
  currentPlayer = currentPlayer === "🐢" ? "🐇" : "🐢";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation(row, col) {
  let roundWon = false;
  board[row][col] = currentPlayer;

  // for (let i = 0; i <= 7; i++) {
  //   const winCondition = winningConditions[i];
  //   let a = gameState[winCondition[0]];
  //   let b = gameState[winCondition[1]];
  //   let c = gameState[winCondition[2]];
  //   if (a === '' || b === '' || c === '') {
  //     continue;
  //   }
  //   if (a === b && b === c) {
  //     roundWon = true;
  //     for (let i = 0; i < 3; i++) {
  //       document.getElementsByClassName('cell')[winCondition[i]].style.backgroundColor = "#FFDB58";
  //     }
  //     break;
  //   }
  // }
  let n = sizeOfBoard;
  //check col
  for (var i = 0; i < n; i++) {
    // if (board[row][i] == undefined) {
    //   break;
    // }
    if (board[row][i] != board[row][col]) {
      break;
    }

    if (i == n - 1) {
      //report win
      roundWon = true;
      var num1 = (row * n);
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('cell')[num1 + i].style.backgroundColor = "#FFDB58";
      }
      break;
    }
  }

  //check row
  for (var i = 0; i < n; i++) {
    // if (board[i][col] == undefined) {
    //   break;
    // }
    if (board[i][col] != board[row][col])
      break;
    if (i == n - 1) {
      //report win
      num2 = parseInt(col);
      roundWon = true;
      for (let i = 0; i < n; i++) {
        document.getElementsByClassName('cell')[num2].style.backgroundColor = "#FFDB58";
        num2 += n;
      }
      break;
    }
  }

  //check diag
  if (row == col) {
    for (var i = 0; i < n; i++) {
      // if (board[i][i] == undefined) {
      //   break;
      // }
      if (board[i][i] != board[row][col])
        break;
      if (i == n - 1) {
        //report win
        roundWon = true;
        var num3 = parseInt(0);
        var addNumber = parseInt(n + 1)
        for (let i = 0; i < n; i++) {
          document.getElementsByClassName('cell')[num3].style.backgroundColor = "#FFDB58";
          num3 += addNumber;
        }
        break;
      }
    }
  }

  //check antidiag
  if (parseInt(row) + parseInt(col) == n - 1) {
    for (var i = 0; i < n; i++) {
      // if (board[i][(n - 1) - i] == undefined) {
      //   break;
      // }
      if (board[i][(n - 1) - i] != board[row][col])
        break;
      if (i == n - 1) {
        //report win
        roundWon = true;
        var num4 = parseInt(n-1);
        var minusNumber = parseInt(n-1)
        for (let i = 0; i < n; i++) {
          document.getElementsByClassName('cell')[num4].style.backgroundColor = "#FFDB58";
          num4 += minusNumber;
        }
        break;
      }
    }
  }



  if (roundWon) {
    // document.getElementById(data-cell-index).style.background = "red";
    statusDisplay.innerHTML = winningMessage();
    // if (currentPlayer === "X") {
    if (currentPlayer === "🐢") {
      mP1++;
      wonP1Marks.innerHTML = mP1;
    }
    // if (currentPlayer === "O") {
    if (currentPlayer === "🐇") {
      mP2++;
      wonP2Marks.innerHTML = mP2;
    }
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('count'));

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  var row = clickedCell.getAttribute("row");
  var col = clickedCell.getAttribute("col");



  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation(row, col)
  // handleResultValidation();
}

function handleRestartGame() {
  gameActive = true;
  // currentPlayer = "X";
  currentPlayer = "🐢";
  // gameState = ["", "", "", "", "", "", "", "", ""];
  sizeOfBoard;
  gameState = [];
  board = new Array(sizeOfBoard);
  for (var i = 0; i < sizeOfBoard; i++) {
    board[i] = new Array(sizeOfBoard);
  }

  for (var i = 0; i < (totalSizeOfBoard); i++) {
    gameState.push("");
  };
  statusDisplay.innerHTML = currentPlayerTurn();
  for (let i = 0; i < totalSizeOfBoard; i++) {
    document.getElementsByClassName('cell')[i].style.backgroundColor = "#393E46";
  }
  document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

function handleNewGame() {
  wonP1Marks.innerHTML = 0;
  mP1 = 0;
  wonP2Marks.innerHTML = 0;
  mP2 = 0;
  sizeOfBoard = 0;
  gameActive = true;
  // currentPlayer = "X";
  currentPlayer = "🐢";
  // gameState = ["", "", "", "", "", "", "", "", ""];
  gameState = [];
  sd.pause();
  // statusDisplay.innerHTML = currentPlayerTurn();
  // for (let i = 0; i <totalSizeOfBoard; i++) {
  //   document.getElementsByClassName('cell')[i].style.backgroundColor = "#393E46";
  // }
  // document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");


}

function handleResetMatch() {
  wonP1Marks.innerHTML = 0;
  mP1 = 0;
  wonP2Marks.innerHTML = 0;
  mP2 = 0;
}

function openGameMode() {
  document.getElementById("gameModeOn").style.display = "block";
  document.getElementById("gameDetail").style.display = "none";
  statusDisplay.innerHTML = currentPlayerTurn();
  gameDetailFunction();
}

function closeGameMode() {
  document.getElementById("gameModeOn").style.display = "none";
  document.getElementById("gameDetail").style.display = "block";
  document.getElementById("player1").value = '';
  document.getElementById("player2").value = '';
  document.getElementById("player1").focus();
}

function validationForm() {
  let x = document.forms["myForm"]["player1"].value;
  let y = document.forms["myForm"]["player2"].value;
  if (x == "" || y == "") {
    $.notify("Please fill in the Player's Name!", {
      offset: {
        x: 20,
        y: 120
      },
      type: "danger",
    })
    return false;
  } else {
    openGameMode();
  }
}

// document.querySelectorAll('.cell').forEach(cell => console.log(cell));
// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// $('#board').on('click','.cell',() => handleCellClick());
$('#board').on('click', '.cell', function(cell) {
  handleCellClick(cell);
});
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
document.querySelector('.game--newGame').addEventListener('click', handleNewGame);
document.querySelector('.reset--match').addEventListener('click', handleResetMatch);



//JQuery.....
$(document).ready(function() {
  var $select = $('select');
  var $cell; // Assign event after buildBoard creates cell
  var $buildButton = $('input.build-board');
  var $document = $(document);
  var $body = $('body');

  var size; // board dimensions size x size
  var winCount; // length condition to achieve in a row

  // Declare and cache global Game condition variables
  var cacheValues = function() {
    size = parseInt($(".board-size option:selected").val());
    // var el = parseInt($(".board-count option:selected").val());
    // if (el > size) {
    //   alert("Length cannot be bigger than board size");
    // } else {
    //   winCount = el;
    // }
    console.log("size: " + size);
    // console.log("size: " + size + " winCount: " + winCount);

    board = new Array(size);
    for (var i = 0; i < size; i++) {
      board[i] = new Array(size);
    }

    return (size);
  }
  $select.change(cacheValues);
  cacheValues();


  // Create function for building a new board

  var buildBoard = function() {
    // Execute game logic based on cached select values
    // Game.newBoard(size);
    // Game.winCount(winCount);
    sd.currentTime=0;
    sd.play();
    var dimension = (100 / size) + '%'; // To set cell width
    var fSize = (15/size) + 'em' ;
    var count = 0; // To number cells
    var list = ''; // Use string to store appended values
    // Loop create new board divs and append to div container. Assign row and col attributes for future access
    for (var row = 0; row < size; row++) {
      for (var col = 0; col < size; col++) {
        list += "<div class='cell' row=" + "'" + row + "' col='" + col + "' count='" + count + "'></div>";
        count++;
        // " + count + "
      }
    }
    $('.container').html(list);
    // Cache event listener on board after build
    $cell = $('.cell');
    $cell.css({
      "width": dimension,
      "height": dimension,
      "font-size": fSize
    });
    // $cell.on('click', takeMove)
    return true;
  };

  // var takeMove = function() {
  //   var row = $(this).attr("row");
  //   var col = $(this).attr("col");
  //   board[row][col] = currentPlayer;
  //
  //   handleResultValidation(row, col)
  //
  //   return true;
  // }

  $buildButton.on('click', buildBoard);
});

