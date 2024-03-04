let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let winner = document.querySelector("#msg");

let turnO = true;
let count = 0

let winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


const gameDraw = () => {
    msg.innerText = "Game was Draw"
    msgContainer.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} win`;
    msgContainer.classList.remove("hide");
    disableBoxes;
};

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1Val1 = boxes[pattern[0]].innerText;
        let pos1Val2 = boxes[pattern[1]].innerText;
        let pos1Val3 = boxes[pattern[2]].innerText;

        if (pos1Val1 != "" && pos1Val2 != "" && pos1Val3 != "") {
            if (pos1Val1 === pos1Val2 && pos1Val2 === pos1Val3) {
                console.log("Winner" + " " + pos1Val1);
                showWinner(pos1Val1);
                return true;
            }
        }

    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

