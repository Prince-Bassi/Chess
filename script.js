const board = document.querySelector(".board");
const squares = document.querySelectorAll(".board .square");



class Square {
       constructor(square) {
              this.square = square;
              this.name = this.square.parentNode.className + (Array.from(this.square.parentNode.children).indexOf(this.square) + 1);
              this.piece = "";

              this.square.textContent = this.piece;

              this.square.addEventListener("click", () => {
                     this.select();
              });
       }

       select() {
              
       }
}

class Game {
       constructor(board, squares) {
              this.board = board;
              this.squares = [];

              for (let i of squares) {
                     let squareObj = new Square(i);
                     this.squares.push(squareObj);
              }

              this.boardMap = ["B-Rook","B-Knight","B-Bishop","B-Queen","B-King","B-Bishop","B-Knight","B-Rook"]
       }

       update() {
              for (let i of this.squares) {
                     i.textContent = i.piece;
              }
       }
}

const game = new Game(board, squares);
