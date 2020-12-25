class Pawn {
	constructor(color) {
		this.notMoved = true;
		this.color = color;
		let name = 'Pawn';
		this.name = name;
	}
	getMoves(board, start) {

		// let possibleMoves = [
		// 	{
		// 		y: start.y + 2,
		// 		x: start.x
		// 	},
		// 	{
		// 		y: start.y + 1,
		// 		x: start.x
		// 	},
		// 	{
		// 		y: start.y + 1,
		// 		x: start.x + 1
		// 	},
		// 	{
		// 		y: start.y + 1,
		// 		x: start.x - 1
		// 	}
		// ];

		// possibleMoves.filter(boardCell => {
		// 	if (boardCell.x > 7 && boardCell.x < 0 && boardCell.y > 7 && boardCell.x < 0) {
		// 		return false
		// 	}
		// 	let figure = board[boardCell.y][boardCell.x];

		// 	if (figure === null) {
		// 		return true;
		// 	}
		// 	if (this.notMoved && !board[start.y + 2][start.x] && !board[start.y + 1][start.x]) {

		// 	}
		// 	return figure.color === this.color ? false : true;
		// })

		let moves = [];

		if (!board[start.y + 1][start.x]) {
			moves.push([start.y + 1, start[1]])
			// this.notMoved = false;
		}
		if (this.notMoved && !board[start.y + 2][start.x] && !board[start.y + 1][start.x]) {
			moves.push([start.y + 2, start[1]])
			this.notMoved = false;
		}
		if (board[start.y + 1][start[1] + 1] && this.color !== board[start[0] + 1][start[1] + 1]['color']) {
			moves.push([start.y + 1, start.x + 1])
		}
		if (board[start.y + 1][start.x - 1] && this.color !== board[start.y + 1][start.x - 1]['color']) {
			moves.push([start.y + 1, start.x - 1])
		}
		return moves
	}
}

// class Rook {
// 	constructor(color) {
// 		this.color = color;
// 	}
// 	getMoves(board, start) {
// 		let moves = [];

// 		let arrayOfMoves = [
// 			board[start[0] + 1][start[1] + 1],
// 			board[start[0] + 2][start[1] + 2],
// 			board[start[0] + 3][start[1] + 3],
// 			board[start[0] + 4][start[1] + 4],
// board[start[0] + 5][start[1] + 5],
// board[start[0] + 6][start[1] + 6],
// board[start[0] + 7][start[1] + 7],
// board[start[0] - 1][start[1] - 1],
// board[start[0] - 2][start[1] - 2],
// board[start[0] - 3][start[1] - 3],
// board[start[0] - 4][start[1] - 4],
// board[start[0] - 5][start[1] - 5],
// board[start[0] - 6][start[1] - 6],
// board[start[0] - 7][start[1] - 7]
// 		]

// 		arrayOfMoves.forEach(elem => {
// 			console.log(elem)
// 			if (elem < 8 || elem > -8 && !elem) {
// 				console.log(elem)
// 				moves.push(elem)
// 			}
// 		})

// 		return moves
// 	}
// }

class King {
	constructor(color) {
		this.color = color;
		let name = 'King';
		this.name = name;
	}
	getMoves(board, start) {
		let moves = [
			{
				y: start.y + 1,
				x: start.x + 1
			},
			{
				y: start.y - 1,
				x: start.x + 1
			},
			{
				y: start.y + 1,
				x: start.x - 1
			},
			{
				y: start.y + 1,
				x: start.x
			},
			{
				y: start.y,
				x: start.x + 1
			},
			{
				y: start.y - 1,
				x: start.x - 1
			},
			{
				y: start.y - 1,
				x: start.x
			},
			{
				y: start.y,
				x: start.x - 1
			},
		];

		let allowedMoves = [];

		moves.filter(boardCell => {
			if (boardCell.x > 7 && boardCell.x < 0 && boardCell.y > 7 && boardCell.x < 0) {
				return allowedMoves.push(Object.values(boardCell)) //false
			}

			let figure = board[boardCell.y][boardCell.x];

			if (figure === null || figure.color !== this.color) {
				return allowedMoves.push(Object.values(boardCell)) //true
			}
		})
		return allowedMoves;
	}
}

class Board {
	constructor() {
		this.field = [
			['bishop', 'knight', 'rook', 'queen', 'king', 'rook', 'knight', 'bishop'],
			[new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white')],
			[new Pawn('white'), new King('white'), new Pawn('black'), null, null, null, null, null],
			[null, new Pawn('black'), null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black')],
			['bishop', 'knight', 'rook', 'queen', 'king', 'rook', 'knight', 'bishop']
		];
	}

	move(start, end) {
		// if (!this.field[start[0]][start[1]]) {
		// 	console.log(`Incorrect move, empty point`)
		// 	return
		// }
		let possibleMoves = this.field[start.y][start.x].getMoves(this.field, start).map(item => item.join(','));
		console.log(possibleMoves)

		let stringEnd = Object.values(end).join(',');
		console.log(stringEnd)

		if (possibleMoves.includes(stringEnd)) {
			console.log(`You've succefully attacked ${this.field[end.y][end.x]['name']} by ${this.field[start.y][start.x]['name']}`)
			this.field[end.y][end.x] = this.field[start.y][start.x];
			this.field[start.y][start.x] = null;
			return this.field; // подумать, что возвращать
		}
		else {
			return (`There is ${this.field[end.y][end.x]['name']} figure, unable to move there`)
		}
	}
	showField() {
		console.log(this.field);
	}
}

let board = new Board;

// board.move([4, 3], [4, 4])
// board.move({ x: 4, y: 3 }, { x: 4, y: 4 })
console.log(board.move({ y: 2, x: 1 }, { y: 3, x: 1 }))
// board.showField()

// board.showField()



