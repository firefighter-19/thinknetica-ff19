class Pawn {
    constructor(color) {
        this.notMoved = true;
        this.color = color;
    }
    getMoves(board, start) {
        let moves = [];

        if (!board[start[0] + 1][start[1]]) {
            moves.push([start[0] + 1,start[1]])
        }
        if (this.notMoved && !board[start[0] + 2][start[1]] && !board[start[0] + 1][start[1]]) {
            moves.push([start[0] + 2, start[1]])
        }
        if (board[start[0] + 1][start[1] + 1] && this.color !== board[start[0] + 1][start[1] + 1]['color']) {
            moves.push([start[0] + 1, start[1] + 1])
        }
        if (board[start[0] + 1][start[1] - 1] && this.color !== board[start[0] + 1][start[1] - 1]['color']) {
            moves.push([start[0] + 1, start[1] - 1])
        }
        this.notMoved = false;
        return moves
    }
}

class King {
    constructor(color) {
        this.color = color;
    }
    getMoves(board, start) {
        let moves = [];



        let allMoves = [ 
            board[start[0] + 1][start[1] + 1],
            board[start[0] + 1][start[1]],
            board[start[0] + 1][start[1] - 1],
            board[start[0]][start[1] + 1],
            board[start[0]][start[1] - 1],
            board[start[0] - 1][start[1] - 1],
            board[start[0] - 1][start[1] - 1],
            board[start[0] - 1][start[1] + 1]
        ]
        console.log (allMoves)
        
        // allMoves.forEach(element => {
        //     if (elem <)
        // }
        
        return moves;
    }
}

// class Rook {
//     constructor(color) {
//         this.color = color;
//     }
//     getMoves(board, start) {
//         let moves = [];

//         let possibleMoves = [ board[start[0] + 1][start[1] + 1],
//                               board[start[0] + 2][start[1] + 2],
//                               board[start[0] + 3][start[1] + 3],
//                               board[start[0] + 4][start[1] + 4],
                            //   board[start[0] + 5][start[1] + 5],
                            //   board[start[0] + 6][start[1] + 6],
                            //   board[start[0] + 7][start[1] + 7],
                            //   board[start[0] - 1][start[1] - 1],
                            //   board[start[0] - 2][start[1] - 2],
                            //   board[start[0] - 3][start[1] - 3],
                            //   board[start[0] - 4][start[1] - 4],
                            //   board[start[0] - 5][start[1] - 5],
                            //   board[start[0] - 6][start[1] - 6],
                            //   board[start[0] - 7][start[1] - 7]
//                              ];
//         console.log (possibleMoves)
        // possibleMoves.forEach((board[start[0]][start[1]]) => {
        //     if (board)
        // })
//     }
// }

class Board {
    constructor() {
        this.field = [
                        ['bishop', 'knight', null, 'queen', new King('white'), 'rook', 'knight', 'bishop'],
                        [new Pawn('white'), new Pawn('white'), new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn],
                        [new Pawn('white'), null, new Pawn('black'), null, null, null, null, null],
                        [null, null, new King('white'), null, null, null, null, null],
                        [null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null],
                        [new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn],
                        ['bishop', 'knight', 'rook', 'queen', 'king', 'rook', 'knight', 'bishop'],
                    ]
    }
        move(start, end) {
            if (!this.field[start[0]][start[1]]) {
                console.log (`Incorrect move, empty point`)
                return
            }

            let possibleMoves = this.field[start[0]][start[1]].getMoves(this.field, start).map(item => item.join(','));

            let stringEnd = end.join(',');

            if (possibleMoves.includes(stringEnd) && possibleMoves > 0) {
                this.field[end[0]][end[1]] = this.field[start[0]][start[1]];
                this.field[start[0]][start[1]] = null;
                // return this.field
            }
        }
        showField() {
            console.log(this.field);
        }
}

let pawn = new Pawn;
let board = new Board;

board.move([3,2],[3,3]);
// console.log(board.move([2,1],[3,1]));
// console.log(board.move([3,1],[4,1]));

// board.showField()



