class Pawn {
    constructor() {
        this.notMoved = true;
    }
    getMoves(board, start) {
        // field[start[0][start[1]]]
        let moves = [];
        moves.push([start[0] + 1,start[1]])
        if (this.notMoved) {
            moves.push([start[0] + 2,start[1]])
            this.notMoved = false;
        }
        return moves;
    }
}

class Board {
    constructor() {
        this.field = [['bishop', 'knight', 'rook', 'queen', 'king', 'rook', 'knight', 'bishop'],
                    [new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn],
                    [null, null, null, null, null, null, null, null],
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
        
            let possibleMoves = this.field[start[0]][start[1]].getMoves(this.field, start).map((item) => item.join(','));

            let stringEnd = end.join(',')

            if(possibleMoves.includes(stringEnd)) {
                this.field[end[0]][end[1]] = this.field[start[0]][start[1]];
                this.field[start[0]][start[1]] = null;
                
            } else {
                console.log('error')
            }
        }
        showField() {
            console.log(this.field);
        }
}


let board = new Board;



// console.log(move.field[0][1])
board.move([1,0],[3,0]);
board.move([1,0],[5,0]);
// move.move([3,0],[3,3]);

board.showField();


