const boxes = document.getElementsByClassName("box");
const btn = document.getElementById("reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

for (let box of boxes) {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
}

const checkWinner = () => {
  for (let pattern of winpatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerHTML !== "" &&
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML
    ) {
      msg.innerHTML = `Winner of the game is ${boxes[a].innerHTML}`;

      msgContainer.classList.remove("hide");
      for (let box of boxes) {
        box.disabled = true;
      }
      btn.classList.add("hide");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }
};

btn.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
  }
});

function newgame() {
  for (let box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
  }
  btn.classList.remove("hide");
  msgContainer.classList.add("hide");
}
