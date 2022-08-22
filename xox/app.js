let main = document.querySelector(".main");
let squares = document.querySelectorAll(".main div");
let playerText = document.querySelector(".player");
const buttonAgain = document.querySelector(".playAgain");
const buttonComp = document.querySelector(".playComp")

playerText.classList.add("playerText")
let player = "one";

function start() {
    squares.forEach(square => {
        square.classList.add("text");
        square.addEventListener("click", () => {
            if (player == "one") {
                buttonAgain.style.display = "block";
                if (square.textContent == "") {
                    square.textContent = "X";
                    playerText.textContent = `player ${player} played`;
                    win();
                    player = "two";
                }
                return;
            }
            else if (player == "two") {
                if (square.textContent == "") {
                    square.textContent = "O";
                    playerText.textContent = `player ${player} played`;
                    win();
                    player = "one";
                }
                return;
            }
        })
    })
}

function win() {
    if (squares[0].textContent && squares[2].textContent && squares[1].textContent) {
        if (squares[0].textContent == squares[2].textContent && squares[0].textContent == squares[1].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[0].textContent && squares[3].textContent && squares[6].textContent) {
        if (squares[0].textContent == squares[3].textContent && squares[0].textContent == squares[6].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[0].textContent && squares[4].textContent && squares[8].textContent) {
        if (squares[0].textContent == squares[4].textContent && squares[0].textContent == squares[8].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[1].textContent && squares[4].textContent && squares[7].textContent) {
        if (squares[1].textContent == squares[4].textContent && squares[1].textContent == squares[7].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[3].textContent && squares[4].textContent && squares[5].textContent) {
        if (squares[3].textContent == squares[4].textContent && squares[3].textContent == squares[5].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[6].textContent && squares[7].textContent && squares[8].textContent) {
        if (squares[6].textContent == squares[7].textContent && squares[6].textContent == squares[8].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[2].textContent && squares[4].textContent && squares[6].textContent) {
        if (squares[2].textContent == squares[4].textContent && squares[2].textContent == squares[6].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[2].textContent && squares[5].textContent && squares[8].textContent) {
        if (squares[2].textContent == squares[5].textContent && squares[2].textContent == squares[8].textContent) {
            winCard();
            return 1;
        }
    }
    if (squares[0].textContent && squares[1].textContent && squares[2].textContent && squares[3].textContent && squares[4].textContent && squares[5].textContent && squares[6].textContent && squares[7].textContent && squares[8].textContent) {
        main.innerHTML = "";
        let card = document.createElement("span");
        card.classList.add("card");
        card.textContent = `scoreless play again`
        main.append(card);
    }
    return;
}

function winCard() {
    main.innerHTML = "";
    let card = document.createElement("span");
    card.classList.add("card");
    card.textContent = `congratulations player ${player} won`;
    main.append(card);
}

function tekrarOyna() {
    main.innerHTML = "";
    for (i = 0; i < 9; i++) {
        let square = document.createElement("div");
        square.classList.add("block");
        main.append(square);
    }
    squares = document.querySelectorAll(".main .block")
    player = "one";
    start();
}

function human() {
    player = "one";
    squares.forEach(square => {
        square.classList.add("text");
        square.addEventListener("click", () => {
            if (player === "one") {
                if (square.textContent == "") {
                    square.textContent = "X";
                    playerText.textContent = `player ${player} played`;
                    win();
                    if (win()) {  //human kazanma durumunda ekrana player one kazandı yazdırmak için gerekli
                        return;
                    }
                    computer();
                    return;
                }
            }
            return;
        })
    })
}

function computer() {
    buttonAgain.style.display = "block";
    player = "computer";
    if (player == "computer") {
        let innerCount = [];
        for (i = 0; i < 9; i++) {
            if (squares[i].textContent == "") {
                innerCount.push(squares[i]);
            }
        }
        let square = innerCount[Math.floor(Math.random() * innerCount.length)]
        if (square.textContent == "") {
            square.textContent = "O";
            playerText.textContent = `player ${player} played`;
            win();
            var sira = innerCount.indexOf(square);
            if (sira !== -1) {
                innerCount.splice(sira, 1);
            }
            human();
        }
        return;
    }
}

buttonComp.addEventListener("click", () => {
    main.innerHTML = "";
    for (i = 0; i < 9; i++) {
        let square = document.createElement("div");
        square.classList.add("block");
        main.append(square);
    }
    squares = document.querySelectorAll(".main .block")
    player = "one";
    human();
})

start();








