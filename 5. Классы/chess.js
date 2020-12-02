class Pawn {
    constructor(color) {
        this.notMoved = true;
        this.color = color;
    }
    getMoves(board, start) {
        let moves = [];

        if (!board[start[0] + 1][start[1]]) {
            moves.push([start[0] + 1,start[1]])
            // this.notMoved = false;
        }
        if (this.notMoved && !board[start[0] + 2][start[1]] && !board[start[0] + 1][start[1]]) {
            moves.push([start[0] + 2, start[1]])
            this.notMoved = false;
        }
        if (board[start[0] + 1][start[1] + 1] && this.color !== board[start[0] + 1][start[1] + 1]['color']) {
            moves.push([start[0] + 1, start[1] + 1])
        }
        if (board[start[0] + 1][start[1] - 1] && this.color !== board[start[0] + 1][start[1] - 1]['color']) {
            moves.push([start[0] + 1, start[1] - 1])
        }
        return moves
    }
}

class Rook {
    constructor(color) {
        this.color = color;
    }
    getMoves(board, start) {
        let moves = [];

        let possibleMoves = [ board[start[0] + 1][start[1] + 1],
                              board[start[0] + 2][start[1] + 2],
                              board[start[0] + 3][start[1] + 3],
                              board[start[0] + 4][start[1] + 4],
                              board[start[0] + 5][start[1] + 5],
                              board[start[0] + 6][start[1] + 6],
                              board[start[0] + 7][start[1] + 7],
                              board[start[0] - 1][start[1] - 1],
                              board[start[0] - 2][start[1] - 2],
                              board[start[0] - 3][start[1] - 3],
                              board[start[0] - 4][start[1] - 4],
                              board[start[0] - 5][start[1] - 5],
                              board[start[0] - 6][start[1] - 6],
                              board[start[0] - 7][start[1] - 7] ];

        if (!board[start[0] + 1][start[1] + 1] && !board[start[0] + 1][start[1]]) {
            moves.push([start[0] + 2,start[1]])
        }
        else if (board[start[0] + 1][start[1] + 1] || board[start[0] + 1][start[1] - 1] && this.color !== board[start[0] + 1][start[1] + 1]['color']) {
            moves.push([start[0] + 1, start[1] + 1])
            moves.push([start[0] + 1, start[1] - 1])
        }
        return moves
    }
}

class Board {
    constructor() {
        this.field = [['bishop', 'knight', new Rook('white'), 'queen', 'king', 'rook', 'knight', 'bishop'],
                    [new Pawn('white'), new Pawn('white'), new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn],
                    [new Pawn('white'), null, new Pawn('black'), null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
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

            console.log (possibleMoves)

            let stringEnd = end.join(',');

            if (possibleMoves.includes(stringEnd)) {
                this.field[end[0]][end[1]] = this.field[start[0]][start[1]];
                this.field[start[0]][start[1]] = null;
                // return this.field
            }
        }
        showField() {
            console.log(this.field);
        }
}

let board = new Board;

console.log(board.move([1,1],[2,0]));

board.showField()



