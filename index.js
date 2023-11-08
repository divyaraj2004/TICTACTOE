console.log("This is my tic tac toe game");
let gameover = new Audio("gameover.mp3");
let ting = new Audio("ting.mp3");
let turn = "X";
let gameovr = false;
//function to change turn
const changeturn = () => {
    return turn === "X" ? "O" : "X"

}
//function to cheack win
const cheackWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
         {
            document.querySelector(".data").innerText = boxtext[e[0]].innerText + ": WINS";
            gameovr = true;
            gameover.play();
            let boxtxt = document.querySelectorAll('.boxtext');
        }
    })


}
//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtxt = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtxt.innerText === '') {
            boxtxt.innerText = turn;
            turn = changeturn();
            ting.play();
            cheackWin();
            if (!gameovr) {
                document.getElementsByClassName("data")[0].innerText = "Turn: "+turn;
            }
        }
    })

})
//add on click listner to reset game
reset.addEventListener('click', () => {
    let boxtxt = document.querySelectorAll('.boxtext');
    Array.from(boxtxt).forEach(element => {
        element.innerText = "";

    })
     turn = "X";
     gameovr=false;
     document.getElementsByClassName("data")[0].innerText = "Turn: "+turn;
    
})
