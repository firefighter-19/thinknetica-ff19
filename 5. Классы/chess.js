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

class Knight {
	constructor(color) {
		this.color = color;
		let name = 'Knight';
		this.name = name;
	}
	getMoves(board, start) {
		let moves = [
			{
				y: start.y + 2,
				x: start.x + 1
			},
			{
				y: start.y + 2,
				x: start.x - 1
			},
			{
				y: start.y + 1,
				x: start.x + 2
			},
			{
				y: start.y - 1,
				x: start.x + 2
			},
			{
				y: start.y - 1,
				x: start.x - 2
			},
			{
				y: start.y + 1,
				x: start.x - 2
			},
			{
				y: start.y - 2,
				x: start.x - 1
			},
			{
				y: start.y - 2,
				x: start.x + 1
			},
		];

		let allowedMoves = [];

		moves.filter(boardCell => {
			if (boardCell.y <= 7 && boardCell.y >= 0 && boardCell.x <= 7 && boardCell.x >= 0) {
				let figure = board[boardCell.y][boardCell.x];
				if (figure === null || figure.color !== this.color) {
					allowedMoves.push(Object.values(boardCell))//true
				}
			}
		})
		return allowedMoves;
	}
}

class Rook {
	constructor(color) {
		this.color = color;
	}
	getMoves(board, start) {
		const coordinates = [
			{
				y: start.y + 1,
				x: start.x + 1
			},
			{
				y: start.y + 2,
				x: start.x + 2
			},
			{
				y: start.y + 3,
				x: start.x + 3
			},
			{
				y: start.y + 4,
				x: start.x + 4
			},
			{
				y: start.y + 5,
				x: start.x + 5
			},
			{
				y: start.y + 6,
				x: start.x + 6
			},
			{
				y: start.y + 7,
				x: start.x + 7
			},
			{
				y: start.y - 1,
				x: start.x - 1
			},
			{
				y: start.y - 2,
				x: start.x - 2
			},
			{
				y: start.y - 3,
				x: start.x - 3
			},
			{
				y: start.y - 4,
				x: start.x - 4
			},
			{
				y: start.y - 5,
				x: start.x - 5
			},
			{
				y: start.y - 6,
				x: start.x - 6
			},
			{
				y: start.y - 7,
				x: start.x - 7
			},
			{
				y: start.y + 1,
				x: start.x - 1
			},
			{
				y: start.y + 2,
				x: start.x - 2
			},
			{
				y: start.y + 3,
				x: start.x - 3
			},
			{
				y: start.y + 4,
				x: start.x - 4
			},
			{
				y: start.y + 5,
				x: start.x - 5
			},
			{
				y: start.y + 6,
				x: start.x - 6
			},
			{
				y: start.y + 7,
				x: start.x - 7
			},
			{
				y: start.y - 1,
				x: start.x + 1
			},
			{
				y: start.y - 2,
				x: start.x + 2
			},
			{
				y: start.y - 3,
				x: start.x + 3
			},
			{
				y: start.y - 4,
				x: start.x + 4
			},
			{
				y: start.y - 5,
				x: start.x + 5
			},
			{
				y: start.y - 6,
				x: start.x + 6
			},
			{
				y: start.y - 7,
				x: start.x + 7
			},
		];

		const moves = [];

		// console.log(board[start.y + 1][start.x])  123231

		coordinates.filter(el => {
			if (el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0) {
				let figure = board[el.y][el.x];
				if (figure === null || figure.color !== this.color || figure) {
					moves.push(el)
				}
			}
		});

		console.log(moves)


		// console.log(result)

		// coordinates.forEach(el => moves.push(Object.values(el)));

		// return moves;
	}
}

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
			if (boardCell.y <= 7 && boardCell.y >= 0 && boardCell.x <= 7 && boardCell.x >= 0) {
				let figure = board[boardCell.y][boardCell.x];
				if (figure === null || figure.color !== this.color || figure) {
					allowedMoves.push(Object.values(boardCell))//true
				}
			}
		})
		return allowedMoves;

		// Если на пути есть фигура, то хода нет
	}
}

class Board {
	constructor() {
		this.field = [
			['bishop', new Knight('white'), new Rook('white'), 'queen', new King('white'), 'rook', new Knight('white'), 'bishop'],
			[new Pawn('white'), null, new Pawn('white'), null, new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white')],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black')],
			['bishop', 'knight', 'rook', 'queen', 'king', 'rook', 'knight', 'bishop']
		];
	}

	move(start, end) {
		const possibleMoves = this.field[start.y][start.x].getMoves(board, start).map(item => item.join(','));
		console.log(possibleMoves)
		const stringEnd = Object.values(end).join(',');
		// console.log(stringEnd)
		console.log(this.field[start.y + 1][start.x])


		if (possibleMoves.includes(stringEnd)) {
			// console.log(`You've succefully attacked ${this.field[end.y][end.x]['name']} by ${this.field[start.y][start.x]['name']}`)
			this.field[end.y][end.x] = this.field[start.y][start.x];
			this.field[start.y][start.x] = null;
			// return this.field;  подумать, что возвращать
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
console.log(board.move({ y: 0, x: 2 }, { y: 1, x: 1 }))
// board.showField()

// board.showField()



